import React from "react";
import Mainbutton from "./Mainbutton";

export default {
  title: "Component/Mainbutton",
  component: Mainbutton,
};

export const Send = (): JSX.Element => <Mainbutton>Senden</Mainbutton>;
export const SelectCourse = (): JSX.Element => (
  <Mainbutton>Kurs wählen</Mainbutton>
);
