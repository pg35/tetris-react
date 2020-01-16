import React from "react";
import Overlay from "./Overlay";

const Dialog = ({ title, children }) => (
  <Overlay>
    <div className="dialog">
      <div className="dialog__header">{title}</div>
      <div className="dialog__body">{children}</div>
    </div>
  </Overlay>
);

export default Dialog;
