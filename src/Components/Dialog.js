import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ title, children }) => (
  <div className="dialog">
    <div className="dialog__header">{title}</div>
    <div className="dialog__body">{children}</div>
  </div>
);

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Dialog;
