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
    body="Hier kann man Basketball spielen und tolle Tricks lernen!"
    priority="high"
  />
);
