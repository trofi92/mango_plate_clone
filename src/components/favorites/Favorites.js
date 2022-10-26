import React from "react";
import { useSelector } from "react-redux";
import TransitionsModal from "../TransitionsModal";
import styles from "./Favorites.module.css";
import FavoritesItem from "./FavoritesItem";
const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);
  return (
    <div className={styles.cartLeft}>
      <div>
        <h3>Shopping Cart</h3>
        {favorites.favorites.map((item) => {
          <FavoritesItem
            key={item.OPENDATA_ID}
            id={item.OPENDATA_ID}
            title={item.BZ_NM}
          />;
        })}
        왜 안나와 시발
      </div>
    </div>
  );
};

export default Favorites;
