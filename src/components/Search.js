import styles from "./Header.module.css";
import React, { useState, useRef, useCallback } from "react";
import useSearch from "../lib/useSearch";

export default function Search() {
  //user input 관리
  const [query, setQuery] = useState("");

  //page 감지
  const [pageNumber, setPageNumber] = useState(1);

  //custom hook : useSearch의 상태값들 불러오기
  const { restaurants, hasMore, loading, error } = useSearch(
    query,
    pageNumber
  );

  // intersection observer+useRef를 이용한 infinite scrolling
  const observer = useRef();
  const lastRestaurantElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  //query = user input 감지
  const handleChange = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
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
          value={query}
          onChange={handleChange}
        />
        {/* <span className={styles.clearBtn}>CLEAR</span> */}
      </label>
      \
      {restaurants.map((restaurant, index) => {
        if (restaurants.length === index + 1) {
          return (
            <div ref={lastRestaurantElementRef} key={restaurant}>
              {restaurant}
            </div>
          );
        } else {
          return <div key={restaurant}>{restaurant}</div>;
        }
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
      <input
        className={styles.btnSearch}
        type="submit"
        value="검색"
      />
    </fieldset>
  );
}
