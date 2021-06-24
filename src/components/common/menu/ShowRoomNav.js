import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import styled from 'styled-components';
import { showRoomData } from 'mocks/showRoomData';
import { NavContentBox } from './MainNav';

const ShowRoomLayout = styled.div`
  flex: 2;
  ul {
    width: 100%;
    padding-right: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 30px;
    li {
      a {
        width: 100%;
        text-decoration: none;
        img {
          width: 100%;
          margin-bottom: 5px;
        }
        span {
          font-size: 14px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  h1 {
    font-size: 22px;
    margin: 40px 0;
    font-weight: bold;
  }
  @media ${({ theme }) => theme.mobile} {
    ul {
      padding-right: 40px;
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 30px;
    }
  }
`;
function ShowRoomItem({ data }) {
  return (
    <li>
      <Link to="/">
        <img src={data.img} alt={data.name} />
        <span>{data.name}</span>
      </Link>
    </li>
  );
}
export default function ShowRoomNav({ onToggleNav }) {
  return (
    <NavContentBox>
      <i>
        <RiArrowLeftLine onClick={() => onToggleNav(0)} />
      </i>
      <ShowRoomLayout>
        <h1>디지털 쇼룸</h1>
        <ul>
          {showRoomData.map(v => (
            <ShowRoomItem key={v.id} data={v} />
          ))}
        </ul>
      </ShowRoomLayout>
    </NavContentBox>
  );
}
