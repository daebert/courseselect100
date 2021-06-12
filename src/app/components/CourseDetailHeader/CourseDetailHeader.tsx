import React from "react";
import styles from "./CourseDetailHeader.module.css";
import ClassBallDoubleDigit from "../../assets/icons/ClassBallDoubleDigit";
import ClassBallNo from "../../assets/icons/ClassBallNo";
import ClassBallSingleDigit from "../../assets/icons/ClassBallSingleDigit";
import RoundImage from "../RoundImage/RoundImage";

function CourseDetailHeader(): JSX.Element {
  return (
    <div className={styles.container}>
      <section>
        <RoundImage imageSrc="/images/basketball.png" />
      </section>
      <section>Basketball</section>
      <section>Leitung: Peter Lustig</section>
      <section>
        Jahrgang
        <ClassBallNo />
        <ClassBallNo />
        <ClassBallNo />
        <ClassBallSingleDigit num="8" />
        <ClassBallSingleDigit num="9" />
        <ClassBallDoubleDigit num="10" />
        <ClassBallDoubleDigit num="11" />
      </section>
    </div>
  );
}

export default CourseDetailHeader;
