import React from "react";

const ImageMini = () => {
  return (
    <figure className="figures-miniatures">
      <img
        src="https://versions.bulma.io/0.6.1/images/placeholders/128x128.png"
        alt="miniature"
      />
    </figure>
  );
};

const ImageSection = () => {
  return (
    <article className="images-section">
      <div className="images-miniatures">
        <ImageMini />
        <ImageMini />
        <ImageMini />
      </div>
      <figure className="figure-main">
        <img
          src="https://versions.bulma.io/0.6.1/images/placeholders/480x480.png"
          alt="main"
        />
      </figure>
    </article>
  );
};

export default ImageSection;
