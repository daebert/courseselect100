import React from "react";
import RoundImage from "./RoundImage";

export default {
  title: "Component/RoundImage",
  component: RoundImage,
};

export const BasketballImage = (): JSX.Element => (
  <RoundImage imageSrc="./Basketball.png" />
);
