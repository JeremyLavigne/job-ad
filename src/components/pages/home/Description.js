import React from "react";

const Choice = ({ content, isActive }) => {
  return (
    <div
      className={`description-choice ${
        isActive && "description-choice--active"
      }`}
    >
      {content}
    </div>
  );
};

const Description = () => {
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
          Price: <span className="description-price">SEK 29999</span>
        </div>
        <div className="description-choices-container">
          <h5>Experience</h5>
          <div className="description-choices">
            <Choice content="Junior" isActive />
            <Choice content="Senior" />
          </div>

          <h5>Position</h5>
          <div className="description-choices">
            <Choice content="Frontend" />
            <Choice content="Fullstack" isActive />
          </div>

          <h5>Worktime</h5>
          <div className="description-choices">
            <Choice content="Full Time" isActive />
            <Choice content="Part Time" />
          </div>
        </div>
      </div>

      <div className="description-about">
        <h4>About</h4>
        <ul>
          <li>Build : 2019</li>
          <li>blah blah</li>
        </ul>
      </div>
    </article>
  );
};

export default Description;
