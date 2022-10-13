import React, { useState } from "react";
import { authService } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,50})$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,12}$/;

  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider)
      .then((userAuth) => {
        dispatch(login());
        console.log(userAuth);
      })
      .catch((err) => {
        return err.message.replace(
          "Something wrong...Please try again!"
        );
      });
  };

  const signInFacebook = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(authService, provider)
      .then((userAuth) => {
        dispatch(login());
        console.log(userAuth);
      })
      .catch((err) => {
        return err.message.replace(
          "Something wrong...Please try again!"
        );
      });
  };

  const loginToApp = async (e) => {
    e.preventDefault();
    // "Sign in" an existing user with Firebase
    await signInWithEmailAndPassword(authService, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
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

  const register = () => {
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
    <div className={styles.login}>
      <div>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit" onClick={loginToApp}>
            Sign In
          </button>
        </form>
        <div>
          <button onClick={signInGoogle} name="google">
            Continue with Google
          </button>
          <button onClick={signInFacebook} name="facebook">
            Continue with Facebook
          </button>
        </div>
        <p>
          Not a member? :{" "}
          <span className={styles.register} onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
