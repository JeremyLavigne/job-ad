import React, { useState, useRef, useEffect } from "react";
import useResize from "../../../utils/useResize";
import ReactImageZoom from "react-image-zoom";

import image1 from "../../../assets/Group1.png";
import image2 from "../../../assets/Group2.png";
import Cube from "./Cube";

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
  const [cubeIsActive, setCubeIsActive] = useState(false);
  const [activeImage, setActiveImage] = useState(image1);
  const containerRef = useRef();
  const containerDimensions = useResize(containerRef);

  useEffect(() => {
    if (activePosition === "Frontend") {
      setActiveImage(image1);
    } else {
      setActiveImage(image2);
    }
    setCubeIsActive(false);
  }, [activePosition]);

  return (
    <article className="images-section">
      <div className="images-miniatures">
        <ImageMini onClick={() => setCubeIsActive(true)} />
        <ImageMini
          src={image1}
          onClick={() => {
            setActiveImage(image1);
            setCubeIsActive(false);
          }}
          isActive={!cubeIsActive && activeImage === image1}
        />
        <ImageMini
          src={image2}
          onClick={() => {
            setActiveImage(image2);
            setCubeIsActive(false);
          }}
          isActive={!cubeIsActive && activeImage === image2}
        />
      </div>
      <figure className="figure-main" ref={containerRef}>
        {cubeIsActive ? (
          <Cube dimensions={containerDimensions} containerRef={containerRef} />
        ) : (
          <ReactImageZoom
            width={containerDimensions.width}
            height={containerDimensions.width}
            img={activeImage}
            zoomPosition="original"
            scale={1.1}
          />
        )}
      </figure>
    </article>
  );
};

export default ImageSection;
