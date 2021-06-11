import React, { ReactNode } from "react";
import styles from "./HowToButton.module.css";
import QuestionmarkIcon from "../../assets/icons/QuestionmarkIcon";

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button}>
      <span>{children}</span>
      <QuestionmarkIcon />
    </button>
  );
}

export default Button;
