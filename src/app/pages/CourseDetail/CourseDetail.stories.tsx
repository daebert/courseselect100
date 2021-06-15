import React from "react";
import CourseDetail from "./CourseDetail";

export default {
  title: "Page/CourseDetail",
  component: CourseDetail,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = (): JSX.Element => <CourseDetail prio="tertiary" />;
