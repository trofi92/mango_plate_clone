import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import usePromise from "../lib/usePromise";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { CartIcon } from "../CartIcons";
import RestaurantItem from "./RestaurantItem";
import { useNavigate } from "react-router-dom";
import { addToFavorites } from "../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import { ToastNotification } from "../ui/ToastNotification";

const RestaurantList = ({ category }) => {
  const [query, setQuery] = useState("");
  const [tmpQuery, setTmpQuery] = useState(query);
  const [toastState, setToastState] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setTmpQuery(e.target.value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setQuery(tmpQuery);
    }, 200); // setTimeout 설정
    return () => clearTimeout(debounce); // clearTimeout 바로 타이머 제거
  }, [tmpQuery]);

  const [loading, response, error] = usePromise(() => {
    const query = category === "/" ? "" : `${category}`;
    return axios.get(
      // 대구맛집(이미지x)
      `https://bananaplate-clone-default-rtdb.firebaseio.com/data/${query}.json`
    );
  }, [category]);

  if (loading) {
    <span>Loading...</span>;
  }

  //when it doesn't get response values
  if (!response) {
    return ""; //or null
  }
  // when it cause some error
  if (error || response.data === null) {
    return alert(
      "페이지를 찾을 수 없어요!",
      navigate("/redirect", {
        state: { url: "/" },
      })
    );
  }
  const data = response.data;

  return (
    <>
      <fieldset className={styles.mainSearch}>
        <legend>전체 검색</legend>
        <label className={styles.searchWord}>
          <span className={styles.icon}>검색 : </span>
          <input
            className={styles.homeSerchInput}
            type="text"
            maxLength="50"
            placeholder="지역, 식당 혹은 음식"
            autoComplete="off"
            value={tmpQuery}
            onChange={handleChange}
          />
        </label>
        <input
          className={styles.btnSearch}
          type="submit"
          value="검색"
        />
      </fieldset>
      {toastState === true ? (
        <ToastNotification setToastState={setToastState} />
      ) : null}
      <RestaurantListBlock>
        {data.data
          .filter((x) => {
            if (query === "") {
              return x;
            } else if (
              x.BZ_NM.toLowerCase().includes(query.toLowerCase()) ||
              x.MNU.toLowerCase().includes(query.toLowerCase())
            ) {
              return x;
            }
          })
          .map((restaurant) => (
            <div key={restaurant.OPENDATA_ID}>
              <div className={styles.favorite}>
                <Button
                  onClick={() => {
                    dispatch(
                      addToFavorites({
                        id: restaurant.OPENDATA_ID,
                        title: restaurant.BZ_NM,
                        menu: restaurant.MNU,
                      })
                    );
                    setToastState(true);
                  }}
                >
                  <CartIcon />
                </Button>
              </div>
              <RestaurantItem
                key={restaurant.OPENDATA_ID}
                id={restaurant.OPENDATA_ID}
                title={restaurant.BZ_NM}
                restaurant={restaurant}
              />
            </div>
          ))}
      </RestaurantListBlock>
    </>
  );
};

export default RestaurantList;

// 대구맛집(이미지x) `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${query}`
// 뉴스 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c237e8c6905945c4849699a16d662ecf`
// 부산맛집(이미지o) `https://apis.data.go.kr/6260000/FoodService/getFoodKr?resultType=json&serviceKey=Z%2FLB33XKrUs5j55T3%2B4tQoVS3VLruSIIpD0ZzDft62uAmHRxv%2B7BShfFS3cGKy9bRuj4wapHt9aLthBtJG69Fw%3D%3D`
//청주시 "http://apis.data.go.kr/6430000/goodRestaService1/getGoodResta1?serviceKey=Z%2FLB33XKrUs5j55T3%2B4tQoVS3VLruSIIpD0ZzDft62uAmHRxv%2B7BShfFS3cGKy9bRuj4wapHt9aLthBtJG69Fw%3D%3D&currentPage=1&perPage=10"

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
