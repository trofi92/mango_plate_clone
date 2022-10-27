import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import FavoritesItem from "./FavoritesItem";
import FavoritesListModal from "./FavoritesListModal";
import RemoveModal from "./RemoveModal";
import { openModal } from "../../features/modal/modalSlice";

//id: OPENDATA_ID, title:BZ_NM, menu:MNU
const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const { isOpen } = useSelector((state) => state.modal);
  console.log(favorites.favorites);
  return (
    <FavoritesListModal title={"즐겨찾기"}>
      {isOpen && <RemoveModal />}

      <div className={styles.cartLeft}>
        <div className={styles.container}>
          {favorites.favorites.map((item) => (
            <div key={item.id}>
              <FavoritesItem
                key={item.id}
                id={item.id}
                title={item.title}
                menu={item.menu}
                item={item}
              />
            </div>
          ))}
        </div>
        <button
          className={styles.cartItemRemoveButton}
          onClick={() => {
            dispatch(openModal());
          }}
        >
          목록 비우기
        </button>
      </div>
    </FavoritesListModal>
  );
};

export default Favorites;
