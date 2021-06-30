import React from "react";
import CourseChoice from "../CourseChoice/CourseChoice";
import styles from "./CourseChoiceBlock.module.css";

type Choice = {
  primary: {
    name: string;
  };
  secondary: {
    name: string;
  };
  tertiary: {
    name: string;
  };
};

function parseChoiceFromLocalStorage(): Choice {
  const json = localStorage.getItem("choiceObject");
  if (json === null) {
    return {
      primary: {
        name: "",
      },
      secondary: {
        name: "",
      },
      tertiary: {
        name: "",
      },
    };
  }
  const data = JSON.parse(json);
  return data;
}

function CourseChoiceBlock(): JSX.Element {
  const choiceObject = parseChoiceFromLocalStorage();
  return (
    <div className={styles.courseChoiceBlock}>
      <CourseChoice priority="primary" name={choiceObject.primary?.name} />
      <CourseChoice priority="secondary" name={choiceObject.secondary?.name} />
      <CourseChoice priority="tertiary" name={choiceObject.tertiary?.name} />
    </div>
  );
}

export default CourseChoiceBlock;
