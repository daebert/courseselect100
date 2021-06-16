import React from "react";
import MainButton from "./MainButton";

export default {
  title: "Component/MainButton",
  component: MainButton,
};

export const Send = (): JSX.Element => (
  <MainButton disabled={false}>Senden</MainButton>
);
export const SelectCourse = (): JSX.Element => (
  <MainButton>Kurs wählen</MainButton>
);
