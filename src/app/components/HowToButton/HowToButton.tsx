import React from "react";
import styles from "./HowToButton.module.css";
import QuestionmarkIcon from "../../assets/icons/QuestionmarkIcon";

function HowToButton(): JSX.Element {
  return (
    <button className={styles.button}>
      <span>Wie es funktioniert!</span>
      <QuestionmarkIcon />
    </button>
  );
}

export default HowToButton;
