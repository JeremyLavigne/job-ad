import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="no-match-page">
      <h2>This page doesn't exist</h2>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default NoMatch;
