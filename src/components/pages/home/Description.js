import React, { useState } from "react";

const Choice = ({ content, isActive, isDisabled, onClick }) => {
  return (
    <div
      className={`description-choice ${
        isActive && "description-choice--active"
      } ${isDisabled && "description-choice--disabled"}`}
      title={isDisabled && "Available in 3 years..."}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

const Description = () => {
  const [activePosition, setActivePosition] = useState("Fullstack");
  const [activeWorktime, setActiveWorktime] = useState("Full Time");

  return (
    <article className="description-section">
      <div className="description-header">
        <h2>Web Developer</h2>
        <span className="description-rating-stars">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
        <span className="description-rating-label">1 rating</span>
      </div>

      <div className="description-top">
        <div>
          Price: <span className="description-price">29.999 kr/mth</span>
        </div>
        <div className="description-choices-container">
          <h5>Experience</h5>
          <div className="description-choices">
            <Choice content="Junior" isActive />
            <Choice content="Senior" isDisabled />
          </div>

          <h5>Position</h5>
          <div className="description-choices">
            <Choice
              content="Frontend"
              isActive={activePosition === "Frontend"}
              onClick={() => setActivePosition("Frontend")}
            />
            <Choice
              content="Fullstack"
              isActive={activePosition === "Fullstack"}
              onClick={() => setActivePosition("Fullstack")}
            />
          </div>

          <h5>Worktime</h5>
          <div className="description-choices">
            <Choice
              content="Full Time"
              isActive={activeWorktime === "Full Time"}
              onClick={() => setActiveWorktime("Full Time")}
            />
            <Choice
              content="Part Time"
              isActive={activeWorktime === "Part Time"}
              onClick={() => setActiveWorktime("Part Time")}
            />
          </div>
        </div>
      </div>

      <div className="description-about">
        <h4>About</h4>
        <ul>
          <li>Highly Motivated</li>
          <li>Full of resources</li>
          <li>Multi-task</li>
        </ul>
      </div>
    </article>
  );
};

export default Description;
