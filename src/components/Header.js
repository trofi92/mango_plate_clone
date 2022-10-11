import styles from "./Header.module.css";
import appStore from "../image/app_store.svg";

export const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <header
        className={`${styles.header} ${styles.headerTransparent}`}
      >
        <a href="/" className={styles.headerLogo}>
          <img
            src={require("../image/banana_plate2.png")}
            alt="logo"
          />
        </a>

        {/* mobile menu WIP
        <ul className={styles.headerIconButtonList}>
          <li
            className={`${styles.headerIconButtonItem} ${styles.onlyMobile}`}
          >
            <button className={styles.menuButton}>
              <img
                className={styles.menuButtonIcon}
                alt="mobile-menu"
              />
            </button>
          </li>
          <li className={styles.headerIconButtonItem}></li>
          <li
            className={`${styles.headerIconButtonItem} ${styles.closeButtonIcon}`}
          ></li>
        </ul> */}

        <ul className={styles.headerMenuList}>
          <li className={`${styles.headerMenuNewItem}`}>
            <a href="/" className={styles.headerMenuLink}>
              <span className={styles.headerMenuText}>
                오늘 뭐먹지?
              </span>
            </a>
          </li>
          <li className={`${styles.headerMenuNewItem}`}>
            <a href="/" className={styles.headerMenuLink}>
              <span className={styles.headerMenuText}>
                내일 뭐먹지?
              </span>
            </a>
          </li>
          <li className={`${styles.headerMenuNewItem}`}>
            <a href="/" className={styles.headerMenuLink}>
              <span className={styles.headerMenuText}>
                주말에 뭐먹지?
              </span>
            </a>
          </li>
        </ul>
        <ul
          className={`${styles.headerIconButtonItem} ${styles.onlyMobile}`}
        >
          <button className={styles.userProfileButton}>
            <span className={styles.personIcon}></span>
            <span className={styles.historyCount}>0</span>
          </button>
        </ul>
      </header>
      <div>
        <p className={styles.title}>
          너와 나의 먹킷리스트 찐경험 후기!
        </p>
        <h1 className={styles.title}>바나나플레이트</h1>

        {/*검색창 클릭시 추천,인기,최근 검색어 탭 표출
         <p>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </p> */}

        <fieldset className={styles.mainSearch}>
          <legend>전체 검색</legend>
          <label className={styles.searchWord}>
            <span className={styles.icon}>검색 : </span>
            <input
              className={styles.homeSerchInput}
              type="text"
              maxLength="50"
              placeholder="지역, 식당 혹은 음식"
              autoComplete="off"
              //   onClick={}
            />
            <span className={styles.clearBtn}>CLEAR</span>
          </label>
          <input
            className={styles.btnSearch}
            type="submit"
            value="검색"
            // onClick={}
          />
        </fieldset>
        <aside className={`${styles.shortcutApp} ${styles.typeMain}`}>
          <a href="/" className={`${styles.btn} ${styles.inbound}`}>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/web/resources/nf58dxcb-7ikpwam.png"
              alt="event"
            />
          </a>
          <button className={`${styles.btn} ${styles.google}`}>
            <img
              src={
                "https://mp-seoul-image-production-s3.mangoplate.com/web/resources/bzdlmp2toaxrdjqg.png"
              }
              alt="google"
            />
          </button>
          <button className={`${styles.btn} ${styles.ios}`}>
            <img src={appStore} alt="ios" />
          </button>
        </aside>
      </div>
    </div>
  );
};
