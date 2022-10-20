import React from "react";
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
  const { SBW, BUS, BZ_NM, SMPL_DESC, HP, MNU, GNG_CS } = restaurant;
  // console.log(MNU.replace("<br />", ""));

  const menu = MNU.replace(
    /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
    " , "
  );

  return (
    <RestaurantItemBlock>
      {
        <div className="thumbnail">
          <a href={HP} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </div>
      }
      <div className="contents">
        <h4>
          <a href={HP} target="_blank" rel="noopener noreferrer">
            {BZ_NM}
          </a>
        </h4>
        <p>{GNG_CS}</p>
        <p>{SMPL_DESC}</p>
        <h5>주메뉴 : {menu}</h5>
        <p>{SBW}</p>
        <p>{BUS}</p>
        <br />
      </div>
    </RestaurantItemBlock>
  );
};

export default RestaurantItem;
