import React, { useState } from 'react';
import { RiHeartLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';
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
  justify-content: space-between;
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
    position: relative;
    cursor: pointer;
    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }
    span {
    }
    div {
      margin-top: 14px;
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

export default function ListItem({ data }) {
  const [hover, setHover] = useState(false);
  const onEnter = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const iconStyle = {
    opacity: hover ? 1 : 0,
  };
  return (
    <ListItemContainer>
      <ListItemBox hover={hover} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <i style={iconStyle}>
          <RiHeartLine />
        </i>
        <div>
          {data.images[1] ? (
            <img
              src={hover ? data.images[1].src : data.images[0].src}
              alt={data.summary}
            />
          ) : (
            <img src={data.images[0].src} alt={data.summary} />
          )}
        </div>
        <article>
          <h2>{data.title}</h2>
          <span>{data.summary}</span>
          <div>
            <span>￦</span>
            <strong>{data.price.toLocaleString()}</strong>
          </div>
          <ButtonCart />
        </article>
      </ListItemBox>
    </ListItemContainer>
  );
}
