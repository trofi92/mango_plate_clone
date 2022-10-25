import { useLayoutEffect } from "react";
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
import { Restaurants } from "./components/Restaurants";
import { Redirect } from "./pages/Redirect";
import NotFound from "./pages/NotFound";
import Test from "./Test";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // useEffect hook : check at page load if a user is authenticated
  useLayoutEffect(() => {
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
        // console.log(userAuth);
      }
      return;
    });
  }, []);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/Test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
        <Route path="/" element={<Restaurants />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
