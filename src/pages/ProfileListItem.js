import styles from "./ProfileListItem.module.css";
import { Card } from "./Card";
import { useSelector } from "react-redux";

export const ProfileListItem = () => {
  const user = useSelector((state) => state.user.value);
  //   const favoritesCtx = useContext(FavoritesContext);
  //   const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  //   function toggleFavoriteStatusHandler() {
  //     if (itemIsFavorite) {
  //       favoritesCtx.removeFavorite(props.id);
  //     } else {
  //       favoritesCtx.addFavorite({
  //         id: props.id,
  //         title: props.title,
  //         description: props.description,
  //         image: props.image,
  //         address: props.address,
  //       });
  //     }
  //   }
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.content}>
          {/* {user.favorite} */}
          {/* useContext와 함께 작업할 것(복습) */}
        </div>
        <div className={styles.actions}>
          <button>
            눌러봐
            {/* {itemIsFavorite ? "Remove" : "To Favorites"} */}
          </button>
        </div>
      </Card>
    </li>
  );
};
