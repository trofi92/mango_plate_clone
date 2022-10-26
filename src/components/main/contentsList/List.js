import React from "react";
import styled from "styled-components";
import Contents from "./Contents";
import ModuleTitle from "../ModuleTitle";

const Container = styled.div`
  width: 100vw;
  height: 753px;
  border-top: 1px solid #dbdbdb;
  padding-top: 38px;
  position: relative;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  height: 100%;
  box-sizing: border-box;
  margin-top: 27px;
  margin-left: 90px;
`;

const List = ({ title, children, info }) => {
  return (
    <Container>
      <ModuleTitle title={title} />
      <Wrapper>
        {info.map((content) => (
          <Contents key={content.textId} info={content}>
            {children}
          </Contents>
        ))}
      </Wrapper>
    </Container>
  );
};

export default List;
