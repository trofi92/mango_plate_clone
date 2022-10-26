import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-left: 90px;
  margin-right: 90px;
  margin-bottom: 15px;
  clear: both;
  & h2 {
    font-size: 1.438rem;
    line-height: 0.5rem;
    color: #ff792a;
    font-weight: normal;
  }
  & a {
    font-size: 15px;
    color: #9b9b9b;
  }
`;

const ModuleTitle = ({ title, more }) => {
  return (
    <TitleContainer>
      <h2>{title}</h2>
      <a onClick={() => alert("로그인 후 이용해주세요!")} href="/#">
        {more}
      </a>
    </TitleContainer>
  );
};

export default ModuleTitle;
