import React from "react";
import CourseDetailHeader from "./CourseDetailHeader";

export default {
  title: "Component/CourseDetailHeader",
  component: CourseDetailHeader,
};

export const Header = (): JSX.Element => (
  <CourseDetailHeader imgSrc="Test" name="Test" instructor="Test" />
);
