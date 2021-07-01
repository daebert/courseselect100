import React from "react";
import CourseChoiceChosen from "./CourseChoiceChosen";

export default {
  title: "Component/CourseChoiceChosen",
  component: CourseChoiceChosen,
};

export const chosen = (): JSX.Element => (
  <CourseChoiceChosen
    name="Tanzen"
    onDeleteClick={() => {
      "clicked";
    }}
  />
);
