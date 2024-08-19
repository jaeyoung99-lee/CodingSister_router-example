import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/"); // 홈으로 가고 싶어서 매개 변수에 홈을 의미하는 슬래시(/)를 적음
  };

  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHomepage}>Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
