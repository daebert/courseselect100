import React from "react";
import styles from "./CourseChoice.module.css";
import BinIcon from "../../assets/icons/BinIcon";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";

type CourseChoiceProps = {
  prio: "primary" | "secondary" | "tertiary";
  courseChoice: string;
};

const priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

function CourseChoice({ prio, courseChoice }: CourseChoiceProps): JSX.Element {
  return (
    <div className={styles.courseChoice}>
      <span>{priorities[prio].icon}</span>
      <span>{courseChoice}</span>
      <BinIcon />
    </div>
  );
}

export default CourseChoice;
