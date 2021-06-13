import React from "react";
import BinIcon from "../../assets/icons/BinIcon";
import styles from "./CourseChoiceChosen.module.css";

type CourseChoiceChosenProps = {
  courseChoiceChosen: string;
};

function CourseChoiceChosen({
  courseChoiceChosen,
}: CourseChoiceChosenProps): JSX.Element {
  return (
    <div className={styles.courseChoiceChosen}>
      <span>{courseChoiceChosen}</span>
      <BinIcon />
    </div>
  );
}

export default CourseChoiceChosen;
