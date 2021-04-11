import React from "react";

// Components
import ImageSection from "./home/ImageSection";
import Description from "./home/Description";
import ShopSection from "./home/ShopSection";

const Home = () => {
  return (
    <div className="home-page">
      <ImageSection />
      <Description />
      <ShopSection />
    </div>
  );
};

export default Home;
