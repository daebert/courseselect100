import React, { ReactNode } from "react";
import styles from "./CourseChoiceButton.module.css";

type CourseChoiceButtonProps = {
  children: ReactNode;
};

function CourseChoiceButton({
  children,
}: CourseChoiceButtonProps): JSX.Element {
  return <button className={styles.button}> {children}</button>;
}

export default CourseChoiceButton;
