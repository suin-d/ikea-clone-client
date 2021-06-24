import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { DotButtonBox } from 'components/common/buttons/ButtonDot';

const ItemContainer = styled.li`
  position: relative;
  &:hover {
    ul {
      li {
        opacity: 1;
      }
    }
  }
`;
const DotButton = styled(DotButtonBox)``;
const DotItemBox = styled.li`
  position: absolute;
  opacity: 0;
  transition: all 0.2s ease;
  cursor: pointer;
  article {
    position: relative;
    padding: 17px 15px;
    width: 150px;
    z-index: 56;
    background: #fff;
    display: none;
    box-shadow: 0px 0px 2px #aaa;
    p {
      font-weight: bold;
    }
    span {
      font-size: 14px;
    }
    p:last-child {
      margin-top: 10px;
    }
    &:hover {
      p:first-child {
        text-decoration: underline;
      }
    }
  }
  &:hover {
    article {
      display: block;
    }
  }
`;
function DotItem({ data }) {
  const history = useHistory();
  const goDetail = () => {
    history.push(`/detail/${data.ProductId}`);
  };
  return (
    <DotItemBox style={{ top: data.top, left: data.left }}>
      <DotButton>
        <i />
      </DotButton>
      <article onClick={goDetail}>
        <p>{data.Product.title}</p>
        <span>{data.Product.summary}</span>
        <p>{`₩ ${data.Product.slCost.toLocaleString()}`}</p>
      </article>
    </DotItemBox>
  );
}
export default function HFItem({ data }) {
  return (
    <ItemContainer>
      <img
        src={data.HFImage.src}
        srcSet={data.HFImage.srcSet}
        sizes={data.HFImage.sizes}
        alt=""
      />
      <ul>
        {data.HFProducts.map((v, i) => (
          <DotItem data={v} key={i} />
        ))}
      </ul>
    </ItemContainer>
  );
}
