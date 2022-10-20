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
const RestaurantItem = ({ x }) => {
  // const { BSSH_NM, SIGUN_NM, DETAIL_ADRES, RM } = x;
  // return (
  //   <RestaurantItemBlock>
  //     <div className="contents">
  //       <h4>{BSSH_NM}</h4>
  //       <p>{SIGUN_NM}</p>
  //       <p>{`${DETAIL_ADRES} ${RM}`}</p>
  //       <br />
  //     </div>
  //   </RestaurantItemBlock>
  // );
  const { MAIN_TITLE, ITEMCNTNTS, HOMEPAGE_URL, MAIN_IMG_THUMB } = x;
  return (
    <RestaurantItemBlock>
      {x.MAIN_IMG_THUMB && (
        <div className="thumbnail">
          <a
            href={HOMEPAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MAIN_IMG_THUMB} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h4>
          <a
            href={HOMEPAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {MAIN_TITLE}
          </a>
        </h4>
        <p>{ITEMCNTNTS}</p>
      </div>
    </RestaurantItemBlock>
  );
};

export default RestaurantItem;
