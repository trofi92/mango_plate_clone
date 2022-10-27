import React, { useState, useEffect } from "react";
import "./ToastNotification.css";
import { Alert } from "@mui/material";

function ToastNotification(props) {
  const [toastAnimation, setToastAnimation] = useState(
    "toast-alert openAnimation"
  );
  useEffect(() => {
    let closeAnimationTimer;
    let mainTimer = setTimeout(() => {
      setToastAnimation("toast-alert closeAnimation");
      closeAnimationTimer = setTimeout(() => {
        props.setToastState(false);
      }, 300);
    }, 1200);
    return () => {
      clearTimeout(mainTimer);
      clearTimeout(closeAnimationTimer);
    };
  }, []);

  function toastClickEvent() {
    props.setToastState(false);
  }

  return (
    <div className={toastAnimation} onClick={toastClickEvent}>
      <Alert severity="success" id="icon" />
      <p>즐겨찾기에 추가되었어요!</p>
    </div>
  );
}

export { ToastNotification };
