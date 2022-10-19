import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "중구",
    text: "중구",
  },
  {
    name: "남구",
    text: "남구",
  },
  {
    name: "서구",
    text: "서구",
  },
  {
    name: "북구",
    text: "북구",
  },
  {
    name: "수성구",
    text: "수성구",
  },
  {
    name: "달성군",
    text: "달성군",
  },
  {
    name: "달서구",
    text: "달서구",
  },
  {
    name: "부산",
    text: "부산",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768p;
  margin: 0 auto;
  text-align: center;
  right: 50%;
  @media screen (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    font-size: 1.2rem;
    color: #ff7100;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #ff7100;Dft62uAmHRxv%2B7BShfFS3cGKy9bRuj4wapHt9aLthBtJG69Fw%3D%3D
    color: #ff7100;
    &:hover {
      color: #ff7101;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) =>
            isActive ? "active" : undefined
          }
          to={c.name === "/" ? "all" : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
