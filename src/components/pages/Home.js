import React from "react";

// Components
import ImageSection from "./home/ImageSection";
import Description from "./home/Description";
import ShopSection from "./home/ShopSection";
import AlsoViewed from "./home/AlsoViewed";
import QuestionAnswer from "./home/QuestionAnswer";
import Review from "./home/Review";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-page-top">
        <ImageSection />
        <Description />
        <ShopSection />
      </section>

      <section className="home-page-bottom">
        <AlsoViewed />
        <QuestionAnswer />
        <Review />
      </section>
    </main>
  );
};

export default Home;
