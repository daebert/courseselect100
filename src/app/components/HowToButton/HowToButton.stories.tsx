import React from "react";
import HowToButton from "./HowToButton";

export default {
  title: "Component/HowToButton",
  component: HowToButton,
};

export const Button = (): JSX.Element => (
  <HowToButton>Wie es funktioniert!</HowToButton>
);
