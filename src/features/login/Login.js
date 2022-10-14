import React, { useState } from "react";
import { authService } from "../../firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import { off } from "../state/stateSlice";
import styles from "./Login.module.css";
import { Register } from "./Register";
import TransitionsModal from "../../components/TransitionsModal";

function Login() {
  const [regiForm, setRegiForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  /**event function for login with social account
    another thing occurs some unknown errors**/

  const onClick = (e) => {
    e.preventDefault();
    setRegiForm(true);
  };

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
    // "Sign in" an existing user with Firebase
    await signInWithEmailAndPassword(authService, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            name: userAuth.user.displayName,
          })
        );
      })
      .catch((err) => {
        return err.message.replace(
          "Please check your Email or Password!"
        );
      });
    // returns  an auth *"object"* after a successful authentication
    // userAuth.user contains all our user details(values)
  };

  return (
    <TransitionsModal>
      {!regiForm ? (
        <div className={styles.login}>
          <div>
            <form>
              <input
                className={styles.loginInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
              <br />
              <input
                className={styles.loginInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
              <br />
              <button type="submit" onClick={loginToApp}>
                Sign In
              </button>
              <br />
              <button className={styles.goRegister} onClick={onClick}>
                이메일로 가입하기!
              </button>
            </form>
            <div>
              <button onClick={onSocialClick} name="google">
                Continue with Google
              </button>
              <br />
              <img
                className={styles.logo}
                src={require("../../image/banana_plate2.png")}
                alt="logo"
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Register />
          <button onClick={() => dispatch(off())}></button>
        </>
      )}
    </TransitionsModal>
  );
}

export default Login;
