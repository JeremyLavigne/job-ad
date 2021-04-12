import React from "react";

// Components
import ImageSection from "./home/ImageSection";
import Description from "./home/Description";
import ShopSection from "./home/ShopSection";
import AlsoViewed from "./home/AlsoViewed";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-page-top">
        <ImageSection />
        <div className="home-page-top-right">
          <Description />
          <ShopSection />
        </div>
      </section>

      <section className="home-page-bottom">
        <AlsoViewed />
      </section>
    </main>
  );
};

export default Home;
