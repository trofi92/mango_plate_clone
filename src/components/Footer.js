import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.bpLogo}>
          <a href="/" className={styles.btnBp}>
            <img
              className={styles.bpLogoImg}
              src={require("../image/banana_plate2.png")}
              alt="logo"
            />
          </a>
          <p className={styles.subtitle}>
            "맛있게 먹고 즐겁게 공유하자!"
          </p>
        </div>

        <button className={styles.btnBpApp}>
          바나나플레이트 앱에서 볼래요!
        </button>
        <p className={styles.snsShortCut}>
          <a
            href="https://www.facebook.com"
            className={`${styles.btn} ${styles.fb}`}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          <a
            href="https://www.instagram.com"
            className={`${styles.btn} ${styles.ig}`}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </p>
        <nav className={styles.linksExternal}>
          <ul className={styles.listLinks}>
            <li>
              <a href="/">회사소개</a>
            </li>
            <li>
              <a href="/">채용</a>
            </li>
            <li>
              <a href="/">투자정보</a>
            </li>
            <li>
              <a href="/">브랜드 가이드라인</a>
            </li>
            <li>
              <a href="/">비즈니스</a>
            </li>
            <li>
              <a href="/">광고 문의</a>
            </li>
          </ul>
          <ul className={styles.listLinks}>
            <li>
              <a href="/">공지사항</a>
            </li>
            <li>
              <a href="/">이용약관</a>
            </li>
            <li>
              <a href="/">비회원 이용자 이용정책</a>
            </li>
            <li>
              <a href="/">개인정보처리방침</a>
            </li>
            <li>
              <a href="/">위치기반서비스 이용약관</a>
            </li>
            <li>
              <a href="/">커뮤니티 가이드라인</a>
            </li>
            <li>
              <a href="/">청소년보호정책</a>
            </li>
            <li>
              <a href="/">문의하기</a>
            </li>
          </ul>
        </nav>
        <div className={styles.sitemapLocationKeyword}>
          <div className={styles.keywordWrap}>
            <span className={styles.keyword}>인기지역 : </span>
            <a href="/" className={styles.keyword}>
              &nbsp;이태원&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;홍대&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;강남역&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;가로수길&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;신촌&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;명동&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;대학로&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;연남동&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;부산&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;합정&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;대구&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;여의도&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;건대&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;광화문&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;일산&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;제주&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;경리단길&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp; 한남동&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;삼청동&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;대전&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;종로&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;서촌&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;잠실&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;사당역&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;인천&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;코엑스&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;상수&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;서래마을&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;송도&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;왕십리&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;분당&nbsp;
            </a>
            |
            <a href="/" className={styles.keyword}>
              &nbsp;혜화&nbsp;
            </a>
            |
          </div>
        </div>
        <div className={styles.languageCopyrights}>
          <p className={styles.selectLanguage}>
            <a href="/" className={styles.selected}>
              &nbsp;한국어&nbsp;
            </a>
            <a href="/">&nbsp;English&nbsp;</a>
            <a href="/">&nbsp;简体中文&nbsp;</a>
          </p>
          <small>
            <p>우리 조 잘한다아</p>
          </small>
        </div>
      </div>
    </footer>
  );
};
