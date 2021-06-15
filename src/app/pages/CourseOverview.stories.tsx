import React from "react";
import CourseOverview from "./CourseOverview";

export default {
  title: "Page/CourseOverview",
  component: CourseOverview,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <CourseOverview prio="tertiary" />;
