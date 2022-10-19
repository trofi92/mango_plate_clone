import React from "react";
import Categories from "./Categories";
import RestaurantList from "./RestaurantList";
import { useParams } from "react-router-dom";

export const Restaurants = () => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || "all";

  return (
    <>
      <Categories />
      <RestaurantList category={category} />
    </>
  );
};
