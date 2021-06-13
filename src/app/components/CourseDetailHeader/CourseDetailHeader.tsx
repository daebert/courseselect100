import React from "react";
import styles from "./CourseDetailHeader.module.css";
import ClassBallDoubleDigit from "../../assets/icons/ClassBallDoubleDigit";
import ClassBallNo from "../../assets/icons/ClassBallNo";
import ClassBallSingleDigit from "../../assets/icons/ClassBallSingleDigit";
import RoundImage from "../RoundImage/RoundImage";

function CourseDetailHeader(): JSX.Element {
  return (
    <header className={styles.header}>
      <section className={styles.header__image}>
        <RoundImage imageSrc="/images/basketball.png" />
      </section>
      <section className={styles.header__text}>
        <h1>Basketball</h1>
        <span className={styles.header__text__body}>Leitung: Peter Lustig</span>
        <section className={styles.header__text__classes}>
          Stufe
          <ClassBallNo />
          <ClassBallNo />
          <ClassBallNo />
          <ClassBallSingleDigit course="8" />
          <ClassBallSingleDigit course="9" />
          <ClassBallDoubleDigit course="10" />
          <ClassBallDoubleDigit course="11" />
        </section>
      </section>
    </header>
  );
}

export default CourseDetailHeader;
