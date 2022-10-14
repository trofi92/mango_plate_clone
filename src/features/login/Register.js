import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authService } from "../../firebaseConfig";
import { login } from "./userSlice";

export const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,50})$/i;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,12}$/;

    if (emailRegex.test(email) !== true) {
      return alert("Please enter a full email");
    } else if (passwordRegex.test(password) !== true) {
      return alert("Please check your password format");
    }
    // create "new user(register)" with Firebase
    createUserWithEmailAndPassword(authService, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {})
          .then(
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
              })
            )
          )
          .catch((err) => {
            console.log("user not updated");
          });
      })
      .catch((err) => {
        alert(err, "Please check your Email or Password!");
      });
  };

  return (
    <div>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your Email"
          type="email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your Password"
          type="password"
        />
        <p>Not a member? :</p>
        <button type="submit" onClick={register}>
          Register Now
        </button>
        <br />
        <button type="submit">다음에 할래요!</button>
      </form>
    </div>
  );
};
