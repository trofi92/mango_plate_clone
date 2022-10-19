import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Restaurants } from "../components/Restaurants";
import { useSelector } from "react-redux";
import { selectUser } from "../features/login/userSlice";

export const Home = (props) => {
  const user = useSelector(selectUser);
  return (
    <>
      <Header />
      {user !== null ? <Restaurants /> : ""}
      <Footer />
    </>
  );
};
