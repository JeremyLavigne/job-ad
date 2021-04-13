import React from "react";

// Components
import ImageSection from "./home/ImageSection";
import Description from "./home/Description";
import ShopSection from "./home/ShopSection";
import AlsoViewed from "./home/AlsoViewed";

const Home = (props) => {
  const {
    cartNumber,
    setCartNumber,
    activePosition,
    activeWorktime,
    setActivePosition,
    setActiveWorktime,
  } = props;

  return (
    <main className="home-page">
      <section className="home-page-top">
        <ImageSection activePosition={activePosition} />
        <div className="home-page-top-right">
          <Description
            activePosition={activePosition}
            setActivePosition={setActivePosition}
            activeWorktime={activeWorktime}
            setActiveWorktime={setActiveWorktime}
          />
          <ShopSection setCartNumber={setCartNumber} cartNumber={cartNumber} />
        </div>
      </section>

      <section className="home-page-bottom">
        <AlsoViewed />
      </section>
    </main>
  );
};

export default Home;
