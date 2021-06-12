import React from "react";
import styles from "./ClassBalls.module.css";
import ClassBallSingleDigit from "../../assets/icons/ClassBallSingleDigit";
import ClassBallDoubleDigit from "../../assets/icons/ClassBallDoubleDigit";
import ClassBallNo from "../../assets/icons/ClassBallNo";

function ClassBalls(): JSX.Element {
  return (
    <div className={styles.classBalls}>
      <ClassBallNo />
      <ClassBallNo />
      <ClassBallNo />
      <ClassBallSingleDigit num="8" />
      <ClassBallSingleDigit num="9" />
      <ClassBallDoubleDigit num="10" />
      <ClassBallDoubleDigit num="11" />
    </div>
  );
}

export default ClassBalls;
