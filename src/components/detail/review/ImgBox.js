import React, { useRef } from 'react';
import { BsPlus } from 'react-icons/bs';
import styled from 'styled-components';

const ImgContainer = styled.div`
  width: 130px;
  height: 130px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  overflow: hidden;
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
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
export default function ImgBox({
  imgBase64,
  setImgBase64,
  selectImg,
  setSelectImg,
}) {
  const imgInput = useRef();

  const selectImgFile = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      setImgBase64(reader.result);
      if (imgBase64) {
        setImgBase64(imgBase64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setSelectImg(e.target.files[0]); // 파일 상태 업데이트
    }
  };
  return (
    <ImgContainer>
      <input
        type="file"
        id="imgFile"
        ref={imgInput}
        onChange={selectImgFile}
        hidden
      />
      <div onClick={() => imgInput.current.click()}>
        {!selectImg && <BsPlus />}
        {selectImg && (
          <img src={imgBase64} alt="업로드된 제품 이미지" id="selectImg" />
        )}
      </div>
    </ImgContainer>
  );
}
