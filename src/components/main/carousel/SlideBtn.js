import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
  position: absolute;
  top: 50%;
  border: 0;
  background-color: transparent;
  width: 28px;
  height: 45px;
  transform: translateY(-35%);
  cursor: pointer;
  opacity: 0.5;
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
  right: 74px;
  background-position: -935px -179px;
  &:hover {
    opacity: 1;
  }
  ${(props) =>
    props.direction &&
    css`
      left: 45px;
      background-position: -935px -230px;
    `}
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const SlideBtn = ({ onClick, value, direction, hidden }) => {
  return (
    <Btn
      onClick={onClick}
      value={value}
      direction={direction}
      hidden={hidden}
    />
  );
};

export default SlideBtn;
