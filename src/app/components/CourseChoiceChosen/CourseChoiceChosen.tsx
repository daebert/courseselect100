import React from "react";
import BinIcon from "../../assets/icons/BinIcon";
import styles from "./CourseChoiceChosen.module.css";

type CourseChoiceChosenProps = {
  name: string;
};

function CourseChoiceChosen({ name }: CourseChoiceChosenProps): JSX.Element {
  return (
    <div className={styles.courseChoiceChosen}>
      <span>{name}</span>
      <BinIcon />
    </div>
  );
}

export default CourseChoiceChosen;
