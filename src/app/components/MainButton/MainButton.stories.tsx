import React from "react";
import MainButton from "./MainButton";

export default {
  title: "Component/MainButton",
  component: MainButton,
};

export const Send = (): JSX.Element => (
  <MainButton choice={true}>Senden</MainButton>
);
export const SelectCourse = (): JSX.Element => (
  <MainButton choice={true}>Kurs wählen</MainButton>
);
