import React from "react";
import styles from "./ClassBalls.module.css";
import ClassBallYes from "../../assets/icons/ClassBallYes";
import ClassBallNo from "../../assets/icons/ClassBallNo";

function ClassBalls(): JSX.Element {
  return (
    <div className={styles.classBalls}>
      <ClassBallNo />
      <ClassBallNo />
      <ClassBallNo />
      <ClassBallYes num="8" />
      <ClassBallYes num="9" />
      <ClassBallYes num="10" />
      <ClassBallYes num="11" />
    </div>
  );
}

export default ClassBalls;
