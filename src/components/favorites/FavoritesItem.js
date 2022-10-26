import { removeItem } from "../../features/favorites/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FavoritesItem.module.css";

function FavoritesItem({ OPEN_ID, BZ_NM }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <p className={styles.cartItemTitle}>{BZ_NM}</p>
        <div className={styles.cartItemIncrDec}>
          <p>{favorites.favorites.length}</p>
        </div>

        <button
          className={styles.cartItemRemoveButton}
          onClick={() => dispatch(removeItem(OPEN_ID))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default FavoritesItem;
