import React from "react";
import CourseChoice from "./CourseChoice";

export default {
  title: "Component/CourseChoice",
  component: CourseChoice,
};

export const firstChoice = (): JSX.Element => (
  <CourseChoice priority="primary" name="Tanzen" />
);

export const secChoice = (): JSX.Element => (
  <CourseChoice priority="secondary" name="Hüpfen" />
);

export const thirdChoice = (): JSX.Element => (
  <CourseChoice priority="tertiary" name="" />
);
