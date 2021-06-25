import React, { useRef } from 'react';
import { BsPlus } from 'react-icons/bs';
import styled from 'styled-components';
import uploadFileToBlob from 'utils/azure';

const ImgContainer = styled.div`
  min-width: 130px;
  height: 130px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  overflow: auto;
  div {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
    svg {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 60px;
      color: #dfdfdf;
    }
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
export default function ImgBox({ imageList, setImageList }) {
  const imgInput = useRef();

  const onChangeImage = async e => {
    const FormatArr = ['gif', 'jpeg', 'jpg', 'png', 'bmp', 'exif'];
    const files = e.target.files;
    const length = e.target.files.length;
    for (let i = 0; i < length; i++) {
      const ext = files[i].name
        .split('.')
        [files[i].name.split('.').length - 1].toLowerCase();

      if (FormatArr.findIndex(format => format === ext) === -1)
        return alert(`${ext}형식은 업로드할 수 없습니다.`);

      if (files[i].size > 5 * 1024 * 1024)
        return alert('5mb이상의 사진은 지원되지 않습니다.');

      const blobsInContainer = await uploadFileToBlob(files[i]);
      setImageList(prev =>
        prev.concat(
          `https://ikeaclone.blob.core.windows.net/reviews/${blobsInContainer}`
        )
      );
    }
  };

  return (
    <ImgContainer>
      <input
        multiple
        type="file"
        id="imgFile"
        ref={imgInput}
        onChange={onChangeImage}
        hidden
      />
      <div onClick={() => imgInput.current.click()}>
        {!imageList ? (
          <BsPlus />
        ) : (
          imageList.map(src => (
            <img src={src} alt="업로드된 제품 이미지" key={src} />
          ))
        )}
      </div>
    </ImgContainer>
  );
}
