import React, { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import { Register } from "../features/login/Register";

export const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setXPosition] = useState(width);
  const side = useRef();

  //toggle when button is clicked
  const toggleMenu = () => {
    if (xPosition > 0) {
      setXPosition(0);
      setIsOpen(true);
    } else {
      setXPosition(width);
      setIsOpen(false);
    }
  };

  //close sidebar when user click ouside of it
  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      setXPosition(width);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className={styles.button}
        >
          {isOpen ? (
            <span>X</span>
          ) : (
            <span className={styles.openBtn}>&gt;</span>
          )}
        </button>
        <Register />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
