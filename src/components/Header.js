import styles from "./Header.module.css";
import appStore from "../image/app_store.svg";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/login/userSlice";
import { logout } from "../features/login/userSlice";
import { Register } from "./Register";
import { useScroll } from "../lib/useScroll";

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //custom hook :  스크롤 이벤트
  const { y } = useScroll();

  // WIP : 사용자 좋아요 or 즐겨찾기 기능 추가시 카운트 증가
  let count = 0;

  return (
    <div className={styles.mainHeader}>
      <header
        className={`${styles.header} ${styles.headerTransparent} ${
          y > 200 ? styles.scrolled : ""
        }`}
      >
        <a href="/" className={styles.headerLogo}>
          <img
            src={require("../image/banana_plate2.png")}
            alt="logo"
          />
        </a>
        <ul className={styles.headerIconButtonList}></ul>
        <ul className={styles.headerMenuList}>
          <li className={styles.headerMenuNewItem}>
            <a href="/" className={styles.headerMenuLink}>
              <span className={styles.headerMenuText}>
                오늘 뭐먹지?
              </span>
            </a>
          </li>
          <li className={styles.headerMenuNewItem}>
            <button
              onClick={() => {
                alert("서비스 준비중입니다!");
              }}
              className={styles.headerMenuLink}
            >
              <span className={styles.headerMenuText}>
                주말에 뭐할래?
              </span>
            </button>
          </li>

          {/* 로그인/로그아웃 */}
          {user !== null ? (
            <li className={styles.headerMenuNewItem}>
              <button
                onClick={() => {
                  dispatch(logout());
                  console.log(logout());
                }}
                className={styles.headerMenuLink}
              >
                <span className={styles.headerMenuText}>
                  로그아웃
                </span>
              </button>
            </li>
          ) : (
            <li className={styles.headerMenuNewItem}>
              <button className={styles.headerMenuLink}>
                <span className={styles.headerLogin}>
                  <Login />
                </span>
                <span className={styles.headerMenuText}>로그인</span>
              </button>
            </li>
          )}
        </ul>

        {/* 로그인/로그아웃 */}
        <li className={styles.headerMenuNewItem}>
          <button className={styles.headerMenuLink}>
            <span className={styles.headerLogin}>
              <Register />
            </span>
            <span className={styles.headerMenuText}>회원가입</span>
          </button>
        </li>
        {user !== null ? (
          <p
            onClick={() => {
              dispatch(logout());
              console.log(logout());
            }}
            className={styles.mobileLogoutText}
          >
            로그아웃
          </p>
        ) : (
          <div className={styles.mobileUserBtn}>
            <p className={styles.mobileLoginText}>
              로그인
              <Login />
            </p>
          </div>
        )}

        {/*WIP: 회원페이지 */}
        <ul
          className={`${styles.headerIconButtonItem} ${styles.onlyMobile}`}
        >
          <button className={styles.userProfileButton}>
            <span className={styles.personIcon}></span>
            <span className={styles.historyCount}>{count}</span>
          </button>
        </ul>
      </header>
      {/* 타이틀/검색창 */}
      <div>
        <p className={styles.title}>
          너와 나의 먹킷리스트 찐경험 후기!
        </p>
        <h1 className={styles.title}>바나나플레이트</h1>

        <aside className={`${styles.shortcutApp} ${styles.typeMain}`}>
          <a href="/" className={`${styles.btn} ${styles.inbound}`}>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/nf58dxcb-7ikpwam.png"
              alt="event"
            />
          </a>
          <button className={`${styles.btn} ${styles.google}`}>
            <a href="https://play.google.com/store/games">
              <img
                src={
                  "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/bzdlmp2toaxrdjqg.png"
                }
                alt="google"
              />
            </a>
          </button>
          <button className={`${styles.btn} ${styles.ios}`}>
            <a href="https://www.apple.com/kr/app-store/">
              <img src={appStore} alt="ios" />
            </a>
          </button>
        </aside>
      </div>
    </div>
  );
};
