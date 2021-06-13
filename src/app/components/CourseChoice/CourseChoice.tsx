import React from "react";
import styles from "./CourseChoice.module.css";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";

type CourseChoiceProps = {
  condition: JSX.Element;
  prio: "primary" | "secondary" | "tertiary";
};

const priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

// const courseChoiceObject = {
//   first: "",
//   second: "",
//   third: "",
// };

// function Condition(): JSX.Element {
//   if (
//     courseChoiceObject.first === "" &&
//     courseChoiceObject.second === "" &&
//     courseChoiceObject.third === ""
//   ) {
//     return <Button />;
//   } else {
//     return <CourseChoiceChosen courseChoiceChosen="Tanzen" />;
//   }
// }

function CourseChoice({ prio, condition }: CourseChoiceProps): JSX.Element {
  return (
    <div className={styles.courseChoice}>
      <span>{priorities[prio].icon}</span>
      <span>{condition}</span>
    </div>
  );
}

export default CourseChoice;
