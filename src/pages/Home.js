import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Restaurants } from "../components/Restaurants";
import Main from "../components/Main";
import { useSelector } from "react-redux";
import { selectUser } from "../features/login/userSlice";
import FavoritesHome from "../components/favorites/FavoritesHome";

export const Home = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <Header />
      {user !== null ? (
        <>
          <FavoritesHome />
          <Restaurants />
        </>
      ) : (
        <Main />
      )}
      <Footer />
    </>
  );
};
