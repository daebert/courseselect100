import React from "react";
import CourseCard from "./CourseCard";

export default {
  title: "Component/CourseCard",
  component: CourseCard,
};

export const Basketball = (): JSX.Element => (
  <CourseCard
    imgSrc="/images/basketball.png"
    headline="Basketball"
    priority="high"
    coursename="Hello"
  />
);
