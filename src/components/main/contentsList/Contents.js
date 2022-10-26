import React from "react";
import styled from "styled-components";

const ContentBlock = styled.div`
  width: 22.6vw;
  height: 333.57px;
  position: relative;
  float: left;
  display: list-item;
  box-sizing: border-box;
  margin: 0px;
  vertical-align: baseline;
  padding: 0 17px 20px;
  text-align: left;
  word-spacing: 0px;
  list-style-type: none;
  /* &:not(:nth-child(4n + 1)) {
    margin-left: 34px;
  } */

  & a {
    position: absolute;
    top: 0;
    width: 20.7vw;
    height: 100%;
    text-decoration-line: none;
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: normal;

    & div {
      text-align: left;
      height: 51.75px;
      width: 100%;
      position: absolute;
      bottom: 4%;
      display: block;
      padding: 9px 0 0;
      z-index: 1;
    }
    & span {
      color: #555;
      font-size: 20px;
    }
    & p {
      font-size: small;
      color: #9b9b9b;
    }
    & img {
      position: absolute;
      height: 249px;
      width: 100%;
      display: block;
      /* cursor: pointer; */
    }
  }
`;

const Contents = ({ info, children }) => {
  const { title, addr, src } = info;
  return (
    <ContentBlock>
      <>
        <a onClick={() => alert("로그인 후 이용해주세요!")} href="/#">
          {children}
          <img alt="menu" src={src} />
          <div>
            <span>{title}</span>
            <p>{addr}</p>
          </div>
        </a>
      </>
    </ContentBlock>
  );
};

export default Contents;
