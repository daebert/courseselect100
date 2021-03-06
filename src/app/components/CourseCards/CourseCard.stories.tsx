import React from "react";
import CourseCard from "./CourseCard";

export default {
  title: "Component/CourseCard",
  component: CourseCard,
};

export const Basketball = (): JSX.Element => (
  <CourseCard
    img="/images/basketball.png"
    text="Basketball"
    priority="high"
    title="Hello"
    disabled={true}
  />
);
