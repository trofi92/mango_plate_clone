import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import styles from "./FavoritesItem.module.css";

function FavoritesItem({ OPEN_ID, BZ_NM, quantity = 0 }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <p className={styles.cartItemTitle}>{BZ_NM}</p>
        <div className={styles.cartItemIncrDec}>
          <button
            onClick={() => dispatch(decrementQuantity(OPEN_ID))}
          >
            -
          </button>

          <p>{quantity}</p>

          <button
            onClick={() => dispatch(incrementQuantity(OPEN_ID))}
          >
            +
          </button>
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
