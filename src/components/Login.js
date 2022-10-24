import React, { useState } from "react";
import { authService } from "../firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/login/userSlice";
import styles from "./Login.module.css";
import TransitionsModal from "./TransitionsModal";
import { Button } from "@mui/material";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  /**event function for login with social account
    another thing occurs some unknown errors**/

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;

    if (name === "google") {
      provider = new GoogleAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  /**login with email and password **/
  const loginToApp = async (e) => {
    e.preventDefault();
    if (email.length < 1 || password.length < 8) {
      alert("아이디 혹은 비밀번호를 확인해주세요");
      // return (
      //   <Alert descirption={"아이디 혹은 비밀번호를 확인해주세요"} />
      // );
    }
    // "Sign in" an existing user with Firebase
    await signInWithEmailAndPassword(authService, email, password)
      .then((userAuth) => {
        //userSlice에서 전달받은 State Slice를 dispatch하고,
        //가져온 action함수에 값을 전달해 state를 update함
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            name: userAuth.user.displayName,
          })
        );
      })
      .catch((err) => {
        err.message.replace("Please check your Email or Password!");
      });
    // returns  an auth *"object"* after a successful authentication
    // userAuth.user contains all our user details(values)
    // return dispatch(closeRegi());
  };

  return (
    <TransitionsModal title={"Login"}>
      <div className={styles.login}>
        <div>
          <img
            className={styles.logo}
            src={require("../image/banana_plate2.png")}
            alt="logo"
          />
          <br />
          <br />
          <form>
            <input
              className={styles.loginInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요!"
              type="email"
            />
            <br />
            <input
              className={styles.loginInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요!"
              type="password"
            />
            <br />
            <Button type="submit" onClick={loginToApp}>
              Sign In
            </Button>
            <br />
          </form>
          <div>
            <Button onClick={onSocialClick} name="google">
              Continue with Google
            </Button>
            <br />
          </div>
        </div>
      </div>
    </TransitionsModal>
  );
}

export default Login;
