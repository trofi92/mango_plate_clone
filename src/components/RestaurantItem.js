import styled from "styled-components";

const RestaurantItem = ({ restaurant }) => {
  const { SBW, BUS, BZ_NM, SMPL_DESC, MNU, GNG_CS } = restaurant;
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

  return (
    <>
      <RestaurantItemBlock>
        <div className="contents">
          <button onClick={handleLink}>
            <h3>{BZ_NM}</h3>
          </button>
          <p>{GNG_CS}</p>
          <p>{desc}</p>
          <h5>주메뉴 : {menu}</h5>
          <p>{subway}</p>
          <p>{bus}</p>
          <br />
          <br />
        </div>
      </RestaurantItemBlock>
    </>
  );
};

export default RestaurantItem;
export const handleLink = (e) => {
  window.open(
    `https://map.naver.com/v5/search/대구+${e.target.innerHTML}`
  );
};
const RestaurantItemBlock = styled.div`
  display: flex;

  .contents {
    h3 {
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
