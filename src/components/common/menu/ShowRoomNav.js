import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import styled from 'styled-components';
import { NavContentBox } from './MainNav';

const showRoomData = [
  {
    id: 1,
    img:
      'https://www.ikea.com/images/tufjord-nordli-regolit-2aa7e67af54c9825264ee940056b7def.jpg?f=xxxs',
    name: '침실',
  },
  {
    id: 2,
    img:
      'https://www.ikea.com/images/-03eb97614676614af504862ac5ecaf53.jpg?f=xxxs',
    name: '거실',
  },
  {
    id: 3,
    img:
      'https://www.ikea.com/images/-ae38ea2b77f552c3c15c81ef7f28e2a4.jpg?f=xxxs',
    name: '주방',
  },
  {
    id: 4,
    img:
      'https://www.ikea.com/images/-b37126d66ec75c2bf7dd94729b3f841d.jpg?f=xxxs',
    name: '다이닝',
  },
  {
    id: 5,
    img:
      'https://www.ikea.com/images/roedhake-sundvik-b60358ba2727a34b23dd308095e30c5a.jpg?f=xxxs',
    name: '어린이 IKEA',
  },
  {
    id: 6,
    img:
      'https://www.ikea.com/images/hemnes-e3678c72f739aab6c5c1d5affa297fc2.jpg?f=xxxs',
    name: '욕실',
  },
  {
    id: 7,
    img:
      'https://www.ikea.com/images/-2b5a2701ae002fc6b7e2143f1d867998.jpg?f=xxxs',
    name: '홈오피스',
  },
  {
    id: 8,
    img:
      'https://www.ikea.com/images/pinnig-7f77b30c470b3b344dff075bf252f65f.jpg?f=xxxs',
    name: '현관',
  },
  {
    id: 9,
    img:
      'https://www.ikea.com/images/bondholmen-738abc8026d964b86022166857b73cc3.jpg?f=xxxs',
    name: '아웃도어',
  },
  {
    id: 10,
    img:
      'https://www.ikea.com/images/-79df77736e888bb0f725d907b5f90331.jpg?f=xxxs',
    name: 'IKEA for Business',
  },
];
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
          {showRoomData.map((v) => (
            <ShowRoomItem key={v.id} data={v} />
          ))}
        </ul>
      </ShowRoomLayout>
    </NavContentBox>
  );
}
