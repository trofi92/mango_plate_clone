import React from "react";
import Carousel from "../components/main/carousel/Carousel";
import List from "../components/main/contentsList/List";
import styled from "styled-components";
import { EatDeal } from "../components/main/contentsList/EatDeal";
import { Editor } from "../components/main/contentsList/Editor";
import { TV } from "../components/main/contentsList/TV";
import { HighRate } from "../components/main/contentsList/HighRate";
import { Image } from "../components/main/carousel/imageJson/Image1";
import { Image2 } from "../components/main/carousel/imageJson/Image2";
import { Image3 } from "../components/main/carousel/imageJson/Image3";
import ApiData from "../components/main/carousel/ApiLoad";

const Badge = styled.i`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  width: 14%;
  padding-bottom: 14%;
  background-size: cover;
  background-image: url("https://mp-seoul-image-production-s3.mangoplate.com/badge_pictures/r-i0n1w_hdfo4vlf.png");
`;

const Main = () => {
  return (
    <div>
      <Carousel title="믿고 보는 맛집리스트" more="리스트 더보기">
        <ApiData page="1" perPage="12" imagedata={Image} />
      </Carousel>
      <List title="EAT딜을 판매 중인 식당" info={EatDeal}>
        <Badge />
      </List>
      <List title="에디터가 선정한 식당" info={Editor} />
      <List title="TV에 나온 식당" info={TV} />
      <List title="평점이 높은 인기 식당" info={HighRate} />
      <Carousel title="지역별 인기 맛집" hidden={true}>
        <ApiData page="5" perPage="6" imagedata={Image2} />
      </Carousel>
      <Carousel title="메뉴별 인기 맛집">
        <ApiData page="2" perPage="12" imagedata={Image3} />
      </Carousel>
    </div>
  );
};

export default Main;
