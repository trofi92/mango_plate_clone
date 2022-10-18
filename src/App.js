import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectUser,
} from "./features/login/userSlice";
import { authService } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Restaurants from "./components/Restaurants";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
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
        console.log(userAuth);
      }
      return;
    });
  }, []);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element="" />
      </Routes>

      {user === null ? (
        <Home />
      ) : (
        <>
          <Home />
          <Restaurants />
        </>
      )}
    </>
  );
}

export default App;
