import React, { useState, useEffect } from "react";
import axios from "axios";
import InnerContainer from "./InnerContainer";
import { List } from "./function/ListFunc";

const ApiData = ({ page, perPage, imagedata }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=${page}&perPage=${perPage}&serviceKey=iOgxDdfAPCg9el%2BtPlGWR1GD8VdhAcInYf9ScWgsSarm%2BUIhn2NeLawCOkg25nW8MhyRZwmWrwlGgF95nwcXXw%3D%3D`
        );
        setData(response.data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div>대기 중…</div>;
  }
  if (!data) {
    return null;
  }

  return (
    <div>
      {List(data, imagedata).map((content) => (
        <InnerContainer key={content.상호} info={content} />
      ))}
    </div>
  );
};

export default ApiData;
