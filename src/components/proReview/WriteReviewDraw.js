import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsPlus } from 'react-icons/bs';
import ButtonBig from '../common/buttons/ButtonBig';
import GiveGrades from './GiveGrades';

const SubmitBtnWrapper = styled.div``;
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
    /* p {
      position: absolute;
      margin: auto;
      bottom: 10px;
      left: 0;
      right: 0;
      font-size: 12px;
      color: #c7c7c7;
    } */
  }
`;
const InputContent = styled.textarea`
  width: 100%;
  height: 180px;
  padding: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  outline: none;
  resize: none;
  font-size: 14px;
  color: #484848;
`;
const InputTitle = styled.input`
  width: 100%;
  /* height: 40px; */
  padding: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  color: #484848;
`;
const InputRecom = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #dfdfdf;
    border-radius: 50%;
    margin-right: 7px;
  }
  label {
    color: #484848;
    font-size: 13px;
  }
`;
const CommentForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const initialGrade = [
  { id: 0, state: 0 },
  { id: 1, state: 0 },
  { id: 2, state: 0 },
  { id: 3, state: 0 },
  { id: 4, state: 0 },
];
export default function WriteReviewDraw() {
  const [inputRecom, setInputRecom] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [imgBase64, setImgBase64] = useState(''); // 파일 base64
  const [selectImg, setSelectImg] = useState(null);
  const [grade, setGrade] = useState(initialGrade);
  const [userGrade, setUserGrade] = useState(0);

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

  useEffect(() => {
    document.querySelector('#recomCk').checked = inputRecom;
    if (inputRecom) {
      document.querySelector('#recomCkSpan').style.background = '#0058a3';
    } else {
      document.querySelector('#recomCkSpan').style.background = 'none';
    }
  }, [inputRecom]);

  return (
    <CommentForm action="/detail" method="get">
      <InputRecom>
        <input
          type="checkbox"
          value="commentRecom"
          name="commentRecom"
          id="recomCk"
          hidden
        />
        <span onClick={() => setInputRecom(!inputRecom)} id="recomCkSpan" />
        <label onClick={() => setInputRecom(!inputRecom)}>
          이 제품을 추천합니다
        </label>
      </InputRecom>
      <GiveGrades
        grade={grade}
        setGrade={setGrade}
        userGrade={userGrade}
        setUserGrade={setUserGrade}
      />
      <InputTitle
        value={inputTitle}
        placeholder="제목을 입력해주세요"
        name="commentTitle"
        onChange={(e) => setInputTitle(e.target.value)}
        required
      />
      <InputContent
        value={inputContent}
        placeholder="내용을 입력해주세요"
        name="commentContent"
        onChange={(e) => setInputContent(e.target.value)}
        required
      />
      <ImgContainer>
        <input
          type="file"
          id="imgFile"
          name="cmimgSrc"
          onChange={selectImgFile}
          hidden
        />
        <div onClick={() => document.querySelector('#imgFile').click()}>
          {!selectImg && <BsPlus />}
          {/* {!selectImg && <p>이미지 추가</p>} */}
          {selectImg && (
            <img
              src={imgBase64}
              alt="업로드된 제품 이미지"
              id="selectImg"
              name="selectImg"
            />
          )}
        </div>
      </ImgContainer>
      <SubmitBtnWrapper>
        <ButtonBig type="submit">작성하기</ButtonBig>
      </SubmitBtnWrapper>
    </CommentForm>
  );
}
