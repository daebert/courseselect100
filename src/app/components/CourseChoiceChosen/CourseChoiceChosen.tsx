import React from "react";
import BinIcon from "../../assets/icons/BinIcon";
import styles from "./CourseChoiceChosen.module.css";

type CourseChoiceChosenProps = {
  name: string;
  setName: (priority: string, name: string) => void;
  priority: "primary" | "secondary" | "tertiary";
};

function CourseChoiceChosen({
  name,
  setName,
  priority,
}: CourseChoiceChosenProps): JSX.Element {
  return (
    <div className={styles.courseChoiceChosen}>
      <span>{name}</span>
      <BinIcon onClick={() => setName(priority, "")} />
    </div>
  );
}

export default CourseChoiceChosen;
