import React from "react";
import LabeledInput from "./LabeledInput";

export default {
  title: "Component/LabeledInput",
  component: "LabeledInput",
};

export const Email = (): JSX.Element => (
  <LabeledInput placeholder="E-Mail" value="" onChange={console.log} />
);
