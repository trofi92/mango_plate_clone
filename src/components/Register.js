import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authService } from "../firebaseConfig";
import { login } from "../features/login/userSlice";
import { closeRegi } from "../features/modal/modalSlice";
import { useNavigate } from "react-router-dom";
import TransitionsModal from "./TransitionsModal";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
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
    alert("가입완료! 메인으로 이동합니다");
    return navigate("/", { replace: true });
  };

  return (
    <TransitionsModal>
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
          <button
            onClick={() => {
              dispatch(closeRegi());
            }}
          >
            다음에 할래요!
          </button>
        </form>
      </div>
    </TransitionsModal>
  );
};
