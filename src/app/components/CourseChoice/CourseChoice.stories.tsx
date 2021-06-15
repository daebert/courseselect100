import React from "react";
import CourseChoice from "./CourseChoice";

export default {
  title: "Component/CourseChoice",
  component: CourseChoice,
};

export const firstChoice = (): JSX.Element => (
  <CourseChoice prio="primary" name="Tanzen" />
);

export const secChoice = (): JSX.Element => (
  <CourseChoice prio="secondary" name="Hüpfen" />
);

export const thirdChoice = (): JSX.Element => (
  <CourseChoice prio="tertiary" name="" />
);
