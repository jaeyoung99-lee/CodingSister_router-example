import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goToProductpage = () => {
    navigate("/products?q=pants");
  };
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about">Go to Aboutpage</Link>
      <button onClick={goToProductpage}>Go to Productpage</button>
    </div>
  );
};

export default Homepage;
