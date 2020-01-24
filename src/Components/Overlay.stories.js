import React from "react";
import { action } from "@storybook/addon-actions";

import Overlay from "./Overlay";

export const Container = ({ children, width = "400px", height = "300px" }) => (
  <div
    style={{
      position: "relative",
      width,
      height,
      border: "5px solid #0f0"
    }}
  >
    {children}
  </div>
);

export default {
  component: Overlay,
  title: "Overlay",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$|^Container$/
};

export const Default = () => (
  <Container>
    <Overlay>
      <h1>hello world</h1>
    </Overlay>
  </Container>
);

export const WithOpacity = () => (
  <Container>
    <Overlay opacity={0.1}>
      <div style={{ width: "100px", height: "100px", background: "purple" }}>
        custom div
      </div>
    </Overlay>
  </Container>
);

export const WithBgColor = () => (
  <Container>
    <Overlay bgColor={"red"}>
      <h1>hello world</h1>
    </Overlay>
  </Container>
);

export const WithOpacity_BgColor = () => (
  <Container>
    <Overlay opacity={1} bgColor={"yellow"}>
      <h1>hello world</h1>
    </Overlay>
  </Container>
);
