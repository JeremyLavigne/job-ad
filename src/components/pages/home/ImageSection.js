import React, { useState, useRef, useEffect } from "react";
import useResize from "../../../utils/useResize";
import ReactImageZoom from "react-image-zoom";

import image1 from "../../../assets/Group1.png";
import image2 from "../../../assets/Group2.png";

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

const ImageSection = ({ activePosition }) => {
  const [activeImage, setActiveImage] = useState(image1);
  const containerRef = useRef();
  const containerDimensions = useResize(containerRef);

  useEffect(() => {
    if (activePosition === "Frontend") {
      setActiveImage(image1);
    } else {
      setActiveImage(image2);
    }
  }, [activePosition]);

  return (
    <article className="images-section">
      <div className="images-miniatures">
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
      <figure className="figure-main" ref={containerRef}>
        <ReactImageZoom
          width={containerDimensions.width}
          height={containerDimensions.width}
          img={activeImage}
          zoomPosition="original"
        />
      </figure>
    </article>
  );
};

export default ImageSection;
