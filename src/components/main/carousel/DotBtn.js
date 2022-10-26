import React from "react";
import styled, { css } from "styled-components";

const DotBtnContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* display: flex;
  justify-content: center; */
  /* margin: 0 auto; */
  bottom: 30px;
  & button {
    /* transform: translateY(100%); */
    cursor: pointer;
    background-color: #9b9b9b;
    padding: 0;
    box-sizing: border-box;
    border: 3px solid transparent;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 5px;
  }
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const DotBtn = ({ ref1, ref2, hidden, onClick }) => {
  return (
    <DotBtnContainer hidden={hidden}>
      <button
        ref={ref1}
        onClick={onClick}
        style={{ backgroundColor: "orange" }}
        value={0}
      />
      <button ref={ref2} onClick={onClick} value={-1} />
    </DotBtnContainer>
  );
};

export default DotBtn;
