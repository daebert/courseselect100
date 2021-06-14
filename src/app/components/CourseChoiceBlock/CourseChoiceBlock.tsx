import React from "react";
import CourseChoice from "../CourseChoice/CourseChoice";
import styles from "./CourseChoiceBlock.module.css";

function CourseChoiceBlock(): JSX.Element {
  return (
    <div className={styles.courseChoiceBlock}>
      <CourseChoice prio="primary" name="Tanzen" />
      <CourseChoice prio="secondary" name="" />
      <CourseChoice prio="tertiary" name="" />
    </div>
  );
}

export default CourseChoiceBlock;
