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

export const LongBody = () => (
  <Dialog title="This is pretty long title This is pretty long title This is pretty long title">
    <p>
      Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause
      no spoil arise plate. Longer ladies valley get esteem use led six.
      Middletons resolution advantages expression themselves partiality so me
      at. West none hope if sing oh sent tell is. Your it to gave life whom as.
      Favourable dissimilar resolution led for and had. At play much to time
      four many. Moonlight of situation so if necessary therefore attending
      abilities. Calling looking enquire up me to in removal. Park fat she nor
      does play deal our. Procured sex material his offering humanity laughing
      moderate can. Unreserved had she nay dissimilar admiration interested.
      Departure performed exquisite rapturous so ye me resources. Attachment
      apartments in delightful by motionless it no. And now she burst sir learn
      total. Hearing hearted shewing own ask. Solicitude uncommonly use her
      motionless not collecting age. The properly servants required mistaken
      outlived bed and. Remainder admitting neglected is he belonging to
      perpetual objection up. Has widen too you decay begin which asked equal
      any. Letter wooded direct two men indeed income sister. Impression up
      admiration he by partiality is. Instantly immediate his saw one day
      perceived. Old blushes respect but offices hearted minutes effects.
      Written parties winding oh as in without on started. Residence gentleman
      yet preserved few convinced. Coming regret simple longer little am sister
      on. Do danger in to adieus ladies houses oh eldest. Gone pure late gay
      ham. They sigh were not find are rent. On projection apartments unsatiable
      so if he entreaties appearance. Rose you wife how set lady half wish. Hard
      sing an in true felt. Welcomed stronger if steepest ecstatic an suitable
      finished of oh. Entered at excited at forming between so produce. Chicken
      unknown besides attacks gay compact out you. Continuing no simplicity no
      favourable on reasonably melancholy estimating. Own hence views two ask
      right whole ten seems. What near kept met call old west dine. Our
      announcing sufficient why pianoforte.
    </p>
  </Dialog>
);
