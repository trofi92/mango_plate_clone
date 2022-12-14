import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "joong",
    text: "중구",
  },
  {
    name: "nam",
    text: "남구",
  },
  {
    name: "seo",
    text: "서구",
  },
  {
    name: "book",
    text: "북구",
  },
  {
    name: "suseong",
    text: "수성구",
  },
  {
    name: "dalseong",
    text: "달성군",
  },
  {
    name: "dalseo",
    text: "달서구",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768p;
  margin: 0 auto;
  text-align: center;
  right: 50%;
  div {
    grid-area: a;
  }
  @media screen (max-width: 769px) {
    width: 100%;
    overflow-x: auto;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin: 0;
    height: 20%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(60px, auto);
    grid-template-areas:
      "a a a"
      "a a a"
      "a a a";
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    a {
      border: none !important;
    }
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
    border-bottom: 2px solid #ff7100;
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
