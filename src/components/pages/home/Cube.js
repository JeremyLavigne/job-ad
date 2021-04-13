import React, { useEffect, useState } from "react";

import image1 from "../../../assets/screen1-1.png";
import image2 from "../../../assets/screen2-1.png";
import image3 from "../../../assets/screen3-1.png";
import image4 from "../../../assets/screen4-1.png";
import image5 from "../../../assets/screen5-1.png";
import image6 from "../../../assets/dev_logo.png";

const Cube = ({ dimensions, containerRef }) => {
  // ----------------------------------- Variables ------------------------------------------------------
  const [positionX, setPositionX] = useState(-30);
  const [positionY, setPositionY] = useState(30);

  // ----------------------------------- Style ------------------------------------------------------
  // Style is here to adapt with container size & mouse position

  const cubeStyle = {
    transform: `translateZ(-400px) rotateX(${positionX}deg) rotateY(${positionY}deg) rotateZ(0deg)`,
  };
  const containerStyle = {
    perspective: "700px",
    width: dimensions.width * 0.8,
    height: dimensions.width * 0.8,
  };
  const surfaceStyle = {
    width: dimensions.width * 0.8,
    height: dimensions.width * 0.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0a74c",
    opacity: 0.85,
  };

  const imgStyle = {
    maxHeight: "100%",
    maxWidth: "100%",
  };

  const imgDevStyle = {
    maxHeight: "80%",
    maxWidth: "80%",
  };

  const figure1Style = {
    ...surfaceStyle,
    transform: `translateZ(${dimensions.width * 0.4}px)`,
  };
  const figure2Style = {
    ...surfaceStyle,
    transform: `rotateX(180deg) translateZ(${dimensions.width * 0.4}px)`,
  };
  const figure3Style = {
    ...surfaceStyle,
    transform: `rotateY(-90deg) translateZ(${dimensions.width * 0.4}px)`,
  };
  const figure4Style = {
    ...surfaceStyle,
    transform: `rotateY(90deg) translateZ(${dimensions.width * 0.4}px)`,
  };
  const figure5Style = {
    ...surfaceStyle,
    transform: `rotateX(90deg) translateZ(${dimensions.width * 0.4}px)`,
  };
  const figure6Style = {
    ...surfaceStyle,
    transform: `rotateX(-90deg) translateZ(${dimensions.width * 0.4}px)`,
  };

  // ----------------------------------- Functions ------------------------------------------------------
  const onMouseMove = (e) => {
    const hw = dimensions.width / 2;
    const hh = dimensions.height / 2;

    (setPositionX(hh - e.clientY) / hh) * 90;
    (setPositionY(e.clientX - hw) / hw) * 90;
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", onMouseMove);

    return () =>
      containerRef.current.removeEventListener("mousemove", onMouseMove);
  }, []);

  // ----------------------------------- Rendering ------------------------------------------------
  return (
    <div className="cube-main-container">
      <div className="cube-container" style={containerStyle}>
        <div className="cube animated" style={cubeStyle}>
          <figure style={figure1Style}>
            <img alt="face1" src={image1} style={imgStyle} />
          </figure>
          <figure style={figure2Style}>
            <img alt="face2" src={image2} style={imgStyle} />
          </figure>
          <figure style={figure3Style}>
            <img alt="face3" src={image6} style={imgDevStyle} />
          </figure>
          <figure style={figure4Style}>
            <img alt="face4" src={image4} style={imgStyle} />
          </figure>
          <figure style={figure5Style}>
            <img alt="face5" src={image5} style={imgStyle} />
          </figure>
          <figure style={figure6Style}>
            <img alt="face6" src={image3} style={imgStyle} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Cube;
