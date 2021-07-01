import React from "react";
import CourseChoice from "../CourseChoice/CourseChoice";
import styles from "./CourseChoiceBlock.module.css";
// import parseChoiceFromLocalStorage from "../../../utils/parseFromLocalStorage";
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
      ...choice,
      [prio]: { name: name },
    });
  }
  return (
    <div className={styles.courseChoiceBlock}>
      <CourseChoice
        priority="primary"
        name={choice.primary?.name}
        onDeleteClick={() => setName("primary", "")}
      />
      <CourseChoice
        priority="secondary"
        name={choice.secondary?.name}
        onDeleteClick={() => setName("secondary", "")}
      />
      <CourseChoice
        priority="tertiary"
        name={choice.tertiary?.name}
        onDeleteClick={() => setName("tertiary", "")}
      />
    </div>
  );
}

export default CourseChoiceBlock;
