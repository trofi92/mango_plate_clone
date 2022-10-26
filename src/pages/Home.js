import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Restaurants } from "../components/Restaurants";
import { useSelector } from "react-redux";
import { selectUser } from "../features/login/userSlice";
import Favorites from "../components/favorites/Favorites";

export const Home = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <Header />

      {user !== null ? (
        <>
          <Favorites />
          <Restaurants />
        </>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};
