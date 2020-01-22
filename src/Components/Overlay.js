import React from "react";
import PropTypes from "prop-types";

const Overlay = ({ children, opacity, bgColor }) => {
  let styles = {};
  if (opacity) styles.opacity = opacity;
  if (bgColor) styles.backgroundColor = bgColor;

  return (
    <div className="overlay" style={{ ...styles }}>
      <div className="overlay__body">{children}</div>
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
  bgColor: PropTypes.string
};

export default Overlay;
