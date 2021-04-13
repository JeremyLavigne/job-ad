import React, { useState } from "react";

import image1 from "../../../assets/Group1.png";
import image2 from "../../../assets/Group2.png";
// import image3 from "https://versions.bulma.io/0.6.1/images/placeholders/128x128.png";

const ImageMini = ({ src, onClick, isActive }) => {
  return (
    <figure className="figures-miniatures" onClick={onClick}>
      <img
        src={src}
        alt="miniature"
        className={isActive ? "miniature-active" : ""}
      />
    </figure>
  );
};

const ImageSection = () => {
  const [activeImage, setActiveImage] = useState(image1);

  return (
    <article className="images-section">
      <div className="images-miniatures">
        {/* <ImageMini src={image3} onClick={() => setActiveImage(image3)} /> */}
        <ImageMini
          src={image1}
          onClick={() => setActiveImage(image1)}
          isActive={activeImage === image1}
        />
        <ImageMini
          src={image2}
          onClick={() => setActiveImage(image2)}
          isActive={activeImage === image2}
        />
      </div>
      <figure className="figure-main">
        <img src={activeImage} alt="main" />
      </figure>
    </article>
  );
};

export default ImageSection;
