import "./home.css";
import Item from "../components/Item";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function FavoritesHome() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className="shopping-cart" onClick={() => navigate("/cart")}>
      <ShoppingCart id="cartIcon" />
      <p>{getTotalQuantity() || 0}</p>
    </div>
  );
}

export default FavoritesHome;
