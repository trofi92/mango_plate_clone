import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authService } from "../firebaseConfig";
import { login } from "../features/login/userSlice";
import { useNavigate } from "react-router-dom";
import TransitionsModal from "./TransitionsModal";
import { Button } from "@mui/material";
import styles from "./Register.module.css";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,50})$/i;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,12}$/;

    if (emailRegex.test(email) !== true) {
      return alert("이메일 형식이 맞지 않아요. 다시 확인해주세요.");
    } else if (passwordRegex.test(password) !== true) {
      return alert("비밀번호 형식이 맞지 않아요. 다시 확인해주세요.");
    } else if (password !== checkPassword) {
      return alert("입력하신 비밀번호가 일치하지 않아요!");
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
    <TransitionsModal title={"Reigister"}>
      <div>
        <img
          className={styles.logo}
          src={require("../image/banana_plate2.png")}
          alt="logo"
        />
        <br />
        <form>
          <p style={styles.label}>이메일 : </p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"
            type="email"
          />
          <br />
          <p style={styles.label}>비밀번호 : </p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <br />
          <p style={styles.label}>비밀번호 확인 : </p>
          <input
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            placeholder="비밀번호를 다시 입력해주세요"
            type="password"
          />
          <br />
          <Button type="submit" onClick={register}>
            가입하기!
          </Button>
          <br />
        </form>
      </div>
    </TransitionsModal>
  );
};
