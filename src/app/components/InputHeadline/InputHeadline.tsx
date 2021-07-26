import React from "react";
import styles from "./InputHeadline.module.css";

type InputHeadlineProps = {
  text: string;
};

function InputHeadline({ text }: InputHeadlineProps): JSX.Element {
  return <div className={styles.container}>{text}</div>;
}

export default InputHeadline;
