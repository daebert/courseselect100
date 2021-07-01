import React from "react";
import BinIcon from "../../assets/icons/BinIcon";
import styles from "./CourseChoiceChosen.module.css";

type CourseChoiceChosenProps = {
  name: string;
  onDeleteClick: () => void;
};

function CourseChoiceChosen({
  name,
  onDeleteClick,
}: CourseChoiceChosenProps): JSX.Element {
  return (
    <div className={styles.courseChoiceChosen}>
      <span>{name}</span>
      <BinIcon onClick={onDeleteClick} />
    </div>
  );
}

export default CourseChoiceChosen;
