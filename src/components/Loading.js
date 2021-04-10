import React from "react";
import ReactDelayRender from "react-delay-render";

const Loading = () => {
  return (
    <div>
      <h2>Loading</h2>
    </div>
  );
};

export default ReactDelayRender({ delay: 300 })(Loading);
