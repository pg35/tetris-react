import React from "react";
import { action } from "@storybook/addon-actions";

import Overlay from "./Overla";

export default {
  component: Overlay,
  title: "Overlay",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => (
  <Overlay>
    <h1>hello world</h1>
  </Overlay>
);

