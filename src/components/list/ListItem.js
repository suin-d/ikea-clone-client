import React, { useState } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { addWish, removeWish } from '../../modules/product/thunk';
import ButtonCart from '../common/buttons/ButtonCart';

const ListItemContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #dfdfdf;
  height: 0;
  padding-top: 170%;
  position: relative;
`;

const ListItemBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 80%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  & > i {
    display: inline-block;
    align-self: flex-end;
    transition: all 0.25s ease;
    font-size: 20px;
    color: #aaa;
    cursor: pointer;
    &:hover {
      color: #111;
    }
  }
  div {
    width: 100%;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  article {
    margin-top: 20px;
    position: relative;
    cursor: pointer;
    h2 {
      font-weight: bold;
      margin-bottom: 7px;
    }
    span {
      line-height: 1.5;
    }
    div {
      margin-top: 12px;
      display: flex;
      align-items: flex-start;
      font-weight: bold;
      span {
        font-size: 11px;
        display: inline-block;
        padding-top: 3px;
      }
      strong {
        text-indent: 3px;
        font-size: 22px;
      }
    }
    button {
      position: absolute;
      right: 0;
      bottom: -30%;
      opacity: 0;
      transition: all 0.25s ease;
    }
  }
  ${(props) =>
    props.hover &&
    css`
      article {
        button {
          opacity: 1;
        }
      }
    `}
`;

function ImageBox({ data, listState, hover }) {
  const imgIndex = data.ProdImages[1] ? 1 : 0;
  return (
    <div>
      {listState === 0 ? (
        data.ProdImages[1] ? (
          <img
            srcSet={
              hover ? data.ProdImages[1].srcSet : data.ProdImages[0].srcSet
            }
            sizes={hover ? data.ProdImages[1].sizes : data.ProdImages[0].sizes}
            src={hover ? data.ProdImages[1].src : data.ProdImages[0].src}
            alt={data.summary}
          />
        ) : (
          <img
            srcSet={data.ProdImages[0].srcSet}
            sizes={data.ProdImages[0].sizes}
            src={data.ProdImages[0].src}
            alt={data.summary}
          />
        )
      ) : (
        <img
          srcSet={data.ProdImages[imgIndex].srcSet}
          sizes={data.ProdImages[imgIndex].sizes}
          src={data.ProdImages[imgIndex].src}
          alt={data.summary}
        />
      )}
    </div>
  );
}

export default function ListItem({ data, listState, userInfo }) {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const isWished = () => {
    const result = userInfo.wishItem.filter((v) => v.id === data.id);
    if (result.length === 0) {
      return false;
    }
    return true;
  };
  const onEnter = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  const goDetail = () => {
    history.push(`/detail/${data.id}`);
  };
  const goLogin = (e) => {
    e.stopPropagation();
    history.push('/user/signin');
  };
  const iconStyle = {
    opacity: hover ? 1 : 0,
  };
  const onAddWish = (e) => {
    e.stopPropagation();
    dispatch(addWish({ userEmail: userInfo.email, productId: data.id }));
  };
  const onRemoveWish = (e) => {
    e.stopPropagation();
    dispatch(removeWish({ userEmail: userInfo.email, productId: data.id }));
  };
  return (
    <ListItemContainer>
      <ListItemBox
        hover={hover}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={goDetail}
      >
        {!userInfo ? (
          <i style={iconStyle} onClick={goLogin}>
            <RiHeartLine />
          </i>
        ) : isWished() ? (
          <i onClick={onRemoveWish}>
            <RiHeartFill />
          </i>
        ) : (
          <i style={iconStyle} onClick={onAddWish}>
            <RiHeartLine />
          </i>
        )}
        <ImageBox data={data} listState={listState} hover={hover} />
        <article>
          <h2>{data.title}</h2>
          <span>{data.summary}</span>
          <div>
            <span>￦</span>
            <strong>{data.prCost.toLocaleString()}</strong>
          </div>
          <ButtonCart />
        </article>
      </ListItemBox>
    </ListItemContainer>
  );
}
