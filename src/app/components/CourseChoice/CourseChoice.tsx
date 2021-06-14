import React from "react";
import styles from "./CourseChoice.module.css";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";

type CourseChoiceProps = {
  prio: "primary" | "secondary" | "tertiary";
  condition: JSX.Element;
};

const priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

function CourseChoice({ prio, condition }: CourseChoiceProps): JSX.Element {
  return (
    <div className={styles.courseChoice}>
      <span>{priorities[prio].icon}</span>
      <span>{condition}</span>
    </div>
  );
}

export default CourseChoice;
