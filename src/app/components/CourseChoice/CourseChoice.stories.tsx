import React from "react";
import CourseChoice from "./CourseChoice";
import Button from "../CourseChoiceButton/CourseChoiceButton";
import CourseChoiceChosen from "../CourseChoiceChosen/CourseChoiceChosen";

export default {
  title: "Component/CourseChoice",
  component: CourseChoice,
};

type ChoiceProps = {
  priority: string;
};

const courseChoiceObject = {
  first: "1",
  second: "",
  third: "",
};

function Choice1(): JSX.Element {
  if (!courseChoiceObject.first) {
    return <Button />;
  } else {
    return <CourseChoiceChosen courseChoiceChosen="Tanzen" />;
  }
}

export const firstChoice = (): JSX.Element => (
  <CourseChoice prio="primary" condition={<Choice1 />} />
);

function Choice2(): JSX.Element {
  if (!courseChoiceObject.second) {
    return <Button />;
  } else {
    return <CourseChoiceChosen courseChoiceChosen="Tanzen" />;
  }
}

export const secChoice = (): JSX.Element => (
  <CourseChoice prio="secondary" condition={<Choice2 />} />
);

function Choice3(): JSX.Element {
  if (!courseChoiceObject.second) {
    return <Button />;
  } else {
    return <CourseChoiceChosen courseChoiceChosen="Tanzen" />;
  }
}

export const thirdChoice = (): JSX.Element => (
  <CourseChoice prio="tertiary" condition={<Choice3 />} />
);
