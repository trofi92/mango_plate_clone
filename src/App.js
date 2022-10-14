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
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Login from "./features/login/Login";
// import { Register } from "./features/login/Register";
import { Routes, Route } from "react-router-dom";

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
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(userAuth);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element="" />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
      {/* <DarkMode /> */}

      {user === null ? (
        <>
          <Header />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
