import React from "react";
import image1 from "../../../assets/also_viewed1.png";
import image2 from "../../../assets/also_viewed2.png";
import image3 from "../../../assets/also_viewed3.png";

const Viewed = ({ src, about, link }) => {
  return (
    <figure className="figures-viewed">
      <a href={link} target="_blank" rel="nonopenner">
        <img src={src} alt="also_viewed" />
      </a>
      <figcaption>{about}</figcaption>
    </figure>
  );
};

const AlsoViewed = () => {
  return (
    <article className="also-viewed-section">
      <h3>People also visited</h3>
      <div className="also-viewed-images">
        <Viewed
          src={image1}
          about="Most recent project"
          link="https://codesandbox.io/s/elated-blackburn-obms1"
        />
        <Viewed
          src={image3}
          about="Mobile App(s)"
          link="https://play.google.com/store/search?q=JeremyLavigne"
        />
        <Viewed
          src={image2}
          about="Github profile"
          link="https://github.com/JeremyLavigne"
        />
      </div>
    </article>
  );
};

export default AlsoViewed;
