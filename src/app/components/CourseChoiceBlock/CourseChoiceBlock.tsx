import React from "react";
import CourseChoice from "../CourseChoice/CourseChoice";
import styles from "./CourseChoiceBlock.module.css";

const retrievedObject = localStorage.getItem("choiceObject");
console.log(retrievedObject);

function CourseChoiceBlock(): JSX.Element {
  return (
    <div className={styles.courseChoiceBlock}>
      <CourseChoice priority="primary" name="Tanzen" />
      <CourseChoice priority="secondary" name="" />
      <CourseChoice priority="tertiary" name="" />
    </div>
  );
}

export default CourseChoiceBlock;
