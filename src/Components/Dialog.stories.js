import React from "react";
import { action } from "@storybook/addon-actions";

import Dialog from "./Dialog";

export default {
  component: Dialog,
  title: "Dialog",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => (
  <Dialog title="Sample title">
    <h1>hello world</h1>
  </Dialog>
);

export const LongTitle = () => (
  <Dialog title="This is pretty long title This is pretty long title This is pretty long title">
    <h1>hello world</h1>
  </Dialog>
);
