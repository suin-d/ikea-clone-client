import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { BsPlus } from 'react-icons/bs';
import styled from 'styled-components';
import { uploadImages } from 'modules/product/thunk';

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
export default function ImgBox({ imageData }) {
  const imgInput = useRef();
  const dispatch = useDispatch();
  const onChangeImage = e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    dispatch(uploadImages(imageFormData));
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
        {!imageData ? (
          <BsPlus />
        ) : (
          imageData.map(v => (
            <img
              src={`${process.env.REACT_APP_SERVER_HOST}/u/r/${v}`}
              alt="업로드된 제품 이미지"
              id="selectImg"
              key={v}
            />
          ))
        )}
      </div>
    </ImgContainer>
  );
}
