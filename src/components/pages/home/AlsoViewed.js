import React from "react";

const Viewed = () => {
  return (
    <figure className="figures-viewed">
      <img
        src="https://versions.bulma.io/0.6.1/images/placeholders/128x128.png"
        alt="also_viewed"
      />
      <figcaption>About</figcaption>
    </figure>
  );
};

const AlsoViewed = () => {
  return (
    <article className="also-viewed-section">
      <h3>People also visited</h3>
      <div className="also-viewed-images">
        <Viewed />
        <Viewed />
        <Viewed />
      </div>
    </article>
  );
};

export default AlsoViewed;
