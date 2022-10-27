import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import styles from "./FavoritesHome.module.css";
import Favorites from "./Favorites";

function FavoritesHome() {
  const favorites = useSelector((state) => state.favorites);

  console.log(favorites);
  return (
    <div className={styles.shoppingFavorites}>
      <ShoppingCart className={styles.cartIcon} />
      <p className={styles.cartCount}>
        <Favorites />
      </p>
    </div>
  );
}

export default FavoritesHome;
