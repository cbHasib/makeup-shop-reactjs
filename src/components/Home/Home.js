import React from "react";
import Slider from "../Silder/Slider";
import HomeIntro from "./HomeIntro";
import ProductType from "./ProductType";

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeIntro />
      <ProductType />
    </div>
  );
};

export default Home;
