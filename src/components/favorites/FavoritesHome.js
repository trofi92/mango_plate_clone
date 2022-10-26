// import Item from "../components/Item";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import styles from "./FavoritesHome.module.css";

function FavoritesHome() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={styles.shoppingFavorites}>
      <ShoppingCart className={styles.cartIcon} />
      <p>{favorites.favorites.length || 0}</p>
    </div>
  );
}

export default FavoritesHome;
