import React from "react";
import { useNavigate } from "react-router-dom";
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

const RestaurantItem = ({ restaurant }) => {
  const navigate = useNavigate();

  const { SBW, BUS, BZ_NM, SMPL_DESC, HP, MNU, GNG_CS } = restaurant;
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
  console.log(restaurant.BZ_NM);
  const handleLink = () => {
    HP === "없음"
      ? alert("페이지를 찾을 수 없어요!")
      : navigate("/redirect", {
          state: { url: `https://${HP}` },
        });
  };

  return (
    <RestaurantItemBlock>
      {
        <div className="thumbnail">
          <button onClick={handleLink}>Link</button>
        </div>
      }
      <div className="contents">
        <h4>
          {/* <a href={HP} target="_blank" rel="noopener noreferrer"> */}
          {BZ_NM}
          {/* </a> */}
        </h4>
        <p>{GNG_CS}</p>
        <p>{desc}</p>
        <h5>주메뉴 : {menu}</h5>
        <p>{subway}</p>
        <p>{bus}</p>
        <br />
      </div>
    </RestaurantItemBlock>
  );
};

export default RestaurantItem;
