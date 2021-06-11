import React, { ReactNode } from "react";
import styles from "./CourseChoiceButton.module.css";

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps): JSX.Element {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
