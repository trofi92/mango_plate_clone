import { removeItem } from "../../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import styles from "./FavoritesItem.module.css";
import { handleLink } from "../RestaurantItem";

const FavoritesItem = ({ id, title, menu }) => {
  const dispatch = useDispatch();
  // const favoritesMenu = menu.replace(
  //   /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
  //   "/"
  // );
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <button onClick={handleLink}>
          <p className={styles.cartItemTitle}>{title}</p>
        </button>
        {/* <div>{favoritesMenu}</div> */}
        <button
          className={styles.cartItemRemoveButton}
          onClick={() => dispatch(removeItem(id))}
        >
          지우기
        </button>
      </div>
    </div>
  );
};
export default FavoritesItem;
