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
    const query = category === "all" ? "" : `&category=${category}`;

    // const getData = () => {
    //   const config = {
    //     baseUrl:
    //       "", //"proxy":"엔트리포인트" > package.json
    //   };
    //   return axios.get(config.baseUrl);
    // };
    // getData();

    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c237e8c6905945c4849699a16d662ecf`
    );
  }, [category]);

  if (loading) {
    return <RestaurantListBlock>Loading...</RestaurantListBlock>;
  }

  //when it doesn't get response values
  if (!response) {
    return null;
  }
  // when it cause some error
  if (error) {
    return <RestaurantListBlock>Error!</RestaurantListBlock>;
  }
  const { articles } = response.data;
  return (
    <RestaurantListBlock>
      {articles.map((article) => (
        <RestaurantItem key={article.url} article={article} />
      ))}
    </RestaurantListBlock>
  );
};

export default RestaurantList;
