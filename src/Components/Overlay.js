import React from "react";

const Overlay = ({ children }) => (
  <div className="overlay">
    <div className="overlay__body">{children}</div>
  </div>
);

export default Overlay;
