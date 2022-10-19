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
  const { BSSH_NM, SIGUN_NM, DETAIL_ADRES, RM } = x;
  return (
    <RestaurantItemBlock>
      <div className="contents">
        <h4>{BSSH_NM}</h4>
        <p>{SIGUN_NM}</p>
        <p>{`${DETAIL_ADRES} ${RM}`}</p>
        <br />
      </div>
    </RestaurantItemBlock>
  );
  // const { title, description, url, urlToImage } = article;
  // return (
  //   <RestaurantItemBlock>
  //     {urlToImage && (
  //       <div className="thumbnail">
  //         <a href={url} target="_blank" rel="noopener noreferrer">
  //           <img src={urlToImage} alt="thumbnail" />
  //         </a>
  //       </div>
  //     )}
  //     <div className="contents">
  //       <h4>
  //         <a href={url} target="_blank" rel="noopener noreferrer">
  //           {title}
  //         </a>
  //       </h4>
  //       <p>{description}</p>
  //     </div>
  //   </RestaurantItemBlock>
  // );
};

export default RestaurantItem;
