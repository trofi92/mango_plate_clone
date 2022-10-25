import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./components/Header.module.css";
import styled from "styled-components";

const RestaurantItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h4 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      font-size: 0.8rem;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

export default function Test_2({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { SBW, BUS, BZ_NM, SMPL_DESC, HP, MNU, GNG_CS } = data;
  // console.log(MNU.replace("<br />", ""));

  const menu = MNU.replace(
    /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
    " "
  );
  const subway = SBW.replace(
    /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
    "  "
  );

  const bus = BUS.replace(
    /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
    "  "
  );

  const desc = SMPL_DESC.replace(
    /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
    "  "
  );
  const handleLink = () => {
    HP === "없음"
      ? alert("페이지를 찾을 수 없어요!")
      : navigate("/redirect", {
          state: { url: `https://${HP}` },
        });
  };
  return (
    <div>
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
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </label>
        <input
          className={styles.btnSearch}
          type="submit"
          value="검색"
        />
      </fieldset>

      {data
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.BZ_NM.toLowerCase().includes(
              searchTerm.toLowerCase()
            ) ||
            val.SMPL_DESC.toLowerCase().includes(
              searchTerm.toLowerCase()
            )
          ) {
            return val;
          }
        })
        .map((x, key) => {
          return (
            <RestaurantItemBlock>
              {
                <div className="thumbnail">
                  <button onClick={handleLink}>Link</button>
                </div>
              }
              <div className="contents">
                <h4>{BZ_NM}</h4>
                <p>{GNG_CS}</p>
                <p>{desc}</p>
                <h5>주메뉴 : {menu}</h5>
                <p>{subway}</p>
                <p>{bus}</p>
                <br />
              </div>
            </RestaurantItemBlock>
          );
        })}
    </div>
  );
}
// else if (
//               val.sta_nm
//                 .toLowerCase()
//                 .includes(searchTerm.toLowerCase()) ||
//               val.sido_nm
//                 .toLowerCase()
//                 .includes(searchTerm.toLowerCase())
//             ) {
//               return val;
//             }
