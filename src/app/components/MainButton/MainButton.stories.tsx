import React from "react";
import MainButton from "./MainButton";

export default {
  title: "Component/MainButton",
  component: MainButton,
};

export const Send = (): JSX.Element => (
  <MainButton disabled={false} route="/">
    Senden
  </MainButton>
);
export const SelectCourse = (): JSX.Element => (
  <MainButton route="/">Kurs wählen</MainButton>
);
