import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ButtonBig from '../../common/buttons/ButtonBig';
import useInput from '../../../hooks/useInput';
import GradeForm from './GradeForm';
import ImgBox from './ImgBox';
import { addReview } from '../../../modules/product/thunk';

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
const InputRecom = styled.label`
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
  const { getProductData: product, uploadImagesData: imageData } = useSelector(
    (state) => state.product
  );
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [recom, setRecom] = useState(false);
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [grade, setGrade] = useState(initialGrade);
  const [userGrade, setUserGrade] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('title', title);
    // console.log('content', content);
    // console.log('grade', userGrade);
    // console.log('recommend', recom);
    // console.log('userId', userInfo.id);
    // console.log('productId', product.id);
    // console.log('images', imageData);
    dispatch(
      addReview({
        title,
        content,
        grade: userGrade,
        recommend: recom,
        userId: userInfo.id,
        productId: product.id,
        images: imageData,
      })
    );
  };

  return (
    <CommentForm onSubmit={onSubmit} encType="multipart/form-data">
      <InputRecom active={recom} onClick={() => setRecom(!recom)}>
        <input
          type="checkbox"
          value="commentRecom"
          id="recomCk"
          hidden
          checked={recom}
          onChange={() => setRecom(!recom)}
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
      <ImgBox imageData={imageData} />
      <ButtonBig type="submit">작성하기</ButtonBig>
    </CommentForm>
  );
}
