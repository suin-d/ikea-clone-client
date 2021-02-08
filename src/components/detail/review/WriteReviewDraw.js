import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ButtonBig from '../../common/buttons/ButtonBig';
import useInput from '../../../hooks/useInput';
import GradeForm from './GradeForm';
import ImgBox from './ImgBox';

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
  ${(props) =>
    props.active &&
    css`
      span {
        background: #0058a3;
      }
    `};
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
  const [recom, setRecom] = useState(false);
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [imgBase64, setImgBase64] = useState(''); // 파일 base64
  const [selectImg, setSelectImg] = useState(null);
  const [grade, setGrade] = useState(initialGrade);
  const [userGrade, setUserGrade] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(recom);
    console.log(title);
    console.log(content);
    console.log(selectImg);
    console.log(userGrade);
  };

  return (
    <CommentForm onSubmit={onSubmit}>
      <InputRecom active={recom} onClick={() => setRecom(!recom)}>
        <input
          type="checkbox"
          value="commentRecom"
          id="recomCk"
          hidden
          checked={recom}
        />
        <span id="recomCkSpan" />
        <label>이 제품을 추천합니다</label>
      </InputRecom>
      <GradeForm
        grade={grade}
        setGrade={setGrade}
        userGrade={userGrade}
        setUserGrade={setUserGrade}
      />
      <InputTitle
        value={title}
        placeholder="제목을 입력해주세요"
        onChange={onChangeTitle}
        required
      />
      <InputContent
        value={content}
        placeholder="내용을 입력해주세요"
        onChange={onChangeContent}
        required
      />
      <ImgBox
        imgBase64={imgBase64}
        setImgBase64={setImgBase64}
        selectImg={selectImg}
        setSelectImg={setSelectImg}
      />
      <ButtonBig type="submit">작성하기</ButtonBig>
    </CommentForm>
  );
}
