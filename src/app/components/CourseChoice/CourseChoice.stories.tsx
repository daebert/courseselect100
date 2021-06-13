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

function Choice({ priority }: ChoiceProps): JSX.Element {
  if (priority === "") {
    return <Button />;
  } else {
    return <CourseChoiceChosen courseChoiceChosen="Tanzen" />;
  }
}

const courseChoiceObject = {
  first: "",
  second: "",
  third: "",
};

export const firstChoice = (): JSX.Element => (
  <CourseChoice
    prio="primary"
    condition={<Choice priority="courseChoiceObject.first" />}
  />
);

// export const secChoice = (): JSX.Element => <CourseChoice prio="secondary" />;

// export const thirdChoice = (): JSX.Element => <CourseChoice prio="tertiary" />;
