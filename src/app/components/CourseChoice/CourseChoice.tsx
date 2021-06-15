import React from "react";
import styles from "./CourseChoice.module.css";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import CourseChoiceChosen from "../CourseChoiceChosen/CourseChoiceChosen";
import ChoiceLink from "../ChoiceLink/ChoiceLink";

type CourseChoiceProps = {
  prio: "primary" | "secondary" | "tertiary";
  name: string;
};

const priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

function CourseChoice({ prio, name }: CourseChoiceProps): JSX.Element {
  return (
    <div className={styles.courseChoice}>
      <span>{priorities[prio].icon}</span>
      {name ? <CourseChoiceChosen name={name} /> : <ChoiceLink />}
    </div>
  );
}

export default CourseChoice;
