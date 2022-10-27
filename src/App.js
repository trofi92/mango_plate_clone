import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/login/userSlice";
import { authService } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Restaurants } from "./components/Restaurants";
import { Redirect } from "./pages/Redirect";
import NotFound from "./pages/NotFound";
import Favorites from "./components/favorites/Favorites";
import RemoveModal from "./components/favorites/RemoveModal";
import { persistor } from "./app/store";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const purge = async () => {
    await persistor.purge();
  };

  // useEffect hook : check at page load if a user is authenticated
  useEffect(() => {
    onAuthStateChanged(authService, (userAuth) => {
      if (userAuth) {
        // if user is logged in, send the user's details(value) to redux,
        // store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
        setTimeout(() => purge(), 200);
      }
      return;
    });
  }, []);

  return (
    <>
      {isOpen && <RemoveModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
        <Route path="/" element={<Restaurants />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
