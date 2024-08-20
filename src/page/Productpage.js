import React from "react";
import { useSearchParams } from "react-router-dom";

const Productpage = () => {
  let [query, setQuery] = useSearchParams();
  console.log("쿼리값 :", query.get("q")); // useSearchParams를 이용해서 쿼리 부분을 불러옴
  return (
    <div>
      <h1>Show All Products!</h1>
    </div>
  );
};

export default Productpage;
