import React from "react";
import styles from "./CourseChoice.module.css";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import CourseChoiceChosen from "../CourseChoiceChosen/CourseChoiceChosen";
import ChoiceLink from "../ChoiceLink/ChoiceLink";

type CourseChoiceProps = {
  priority: "primary" | "secondary" | "tertiary";
  name: string;
};

const priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

function CourseChoice({ priority, name }: CourseChoiceProps): JSX.Element {
  return (
    <div className={styles.courseChoice}>
      <span>{priorities[priority].icon}</span>
      {name ? (
        <CourseChoiceChosen name={name} />
      ) : (
        <ChoiceLink link={`/overview?priority=${priority}`} />
      )}
    </div>
  );
}

export default CourseChoice;
