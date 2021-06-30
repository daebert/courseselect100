import React from "react";
import CourseChoice from "../CourseChoice/CourseChoice";
import styles from "./CourseChoiceBlock.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

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

function CourseChoiceBlock(): JSX.Element {
  const [choice, setChoice] = useLocalStorage<Choice>("choiceObject", {
    primary: {
      name: "",
    },
    secondary: {
      name: "",
    },
    tertiary: {
      name: "",
    },
  });
  function setName(prio: string, name: string) {
    setChoice({
      [prio]: { name: name },
      ...choice,
    });
  }
  return (
    <div className={styles.courseChoiceBlock}>
      <CourseChoice
        priority="primary"
        name={choice.primary?.name}
        setName={setName}
      />
      <CourseChoice
        priority="secondary"
        name={choice.secondary?.name}
        setName={setName}
      />
      <CourseChoice
        priority="tertiary"
        name={choice.tertiary?.name}
        setName={setName}
      />
    </div>
  );
}

export default CourseChoiceBlock;
