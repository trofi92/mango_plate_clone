import React from "react";
import styled from "styled-components";
import RestaurantItem from "./RestaurantItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const RestaurantListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const RestaurantList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    // 대구맛집(이미지x) `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${query}`
    // 뉴스 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c237e8c6905945c4849699a16d662ecf`
    // 부산맛집(이미지o) `https://apis.data.go.kr/6260000/FoodService/getFoodKr?resultType=json&serviceKey=Z%2FLB33XKrUs5j55T3%2B4tQoVS3VLruSIIpD0ZzDft62uAmHRxv%2B7BShfFS3cGKy9bRuj4wapHt9aLthBtJG69Fw%3D%3D`
    // const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      //청주시
      "http://apis.data.go.kr/6430000/goodRestaService1/getGoodResta1?serviceKey=Z%2FLB33XKrUs5j55T3%2B4tQoVS3VLruSIIpD0ZzDft62uAmHRxv%2B7BShfFS3cGKy9bRuj4wapHt9aLthBtJG69Fw%3D%3D&currentPage=1&perPage=10"
    );
  }, [category]);

  if (loading) {
    return <RestaurantListBlock>Loading...</RestaurantListBlock>;
  }

  //when it doesn't get response values
  if (!response) {
    return ""; //or null
  }
  // when it cause some error
  if (error) {
    return <RestaurantListBlock>Error!</RestaurantListBlock>;
  }
  const { body } = response.data;
  console.log(response.data);

  return (
    <RestaurantListBlock>
      {body.map((x) => (
        <div>
          <RestaurantItem key={x.BSSH_NM} x={x} />
        </div>
      ))}
    </RestaurantListBlock>
  );
};

export default RestaurantList;
