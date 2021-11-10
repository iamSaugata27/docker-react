import React from "react";

const WithoutJSX = () => {
  return React.createElement(
    "div",
    { id: "tag", className: "jsx" },
    React.createElement("h1", null, "Hello WithoutJSX!")
  );
};

export default WithoutJSX;
