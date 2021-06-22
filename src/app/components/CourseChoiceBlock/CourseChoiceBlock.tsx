import React from "react";
import CourseChoice from "../CourseChoice/CourseChoice";
import styles from "./CourseChoiceBlock.module.css";

// const choiceObject = localStorage.getItem("choiceObject");
// console.log(choiceObject);

// if (choiceObject !== null) {
//   JSON.parse(choiceObject);
// } else {
//   ("");
// }

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

const PrioName = parseChoiceFromLocalStorage();
const name1 = PrioName.primary === undefined ? "" : PrioName.primary.name;
const name2 = PrioName.secondary === undefined ? "" : PrioName.secondary.name;
const name3 = PrioName.tertiary === undefined ? "" : PrioName.tertiary.name;

function CourseChoiceBlock(): JSX.Element {
  return (
    <div className={styles.courseChoiceBlock}>
      <CourseChoice priority="primary" name={name1} />
      <CourseChoice priority="secondary" name={name2} />
      <CourseChoice priority="tertiary" name={name3} />
    </div>
  );
}

export default CourseChoiceBlock;
