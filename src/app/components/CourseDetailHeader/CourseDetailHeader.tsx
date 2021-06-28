import React from "react";
import styles from "./CourseDetailHeader.module.css";
import ClassBallYes from "../../assets/icons/ClassBallYes";
import ClassBallNo from "../../assets/icons/ClassBallNo";
import RoundImage from "../RoundImage/RoundImage";

type CourseDetailHeaderProps = {
  imgSrc: string;
  name: string;
  instructor: string;
};

function CourseDetailHeader({
  imgSrc,
  name,
  instructor,
}: CourseDetailHeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <section className={styles.header__image}>
        <RoundImage imageSrc={imgSrc} />
      </section>
      <section className={styles.header__text}>
        <h1>{name}</h1>
        <span className={styles.header__body}>{instructor}</span>
        <section className={styles.header__classes}>
          Stufe
          <ClassBallNo />
          <ClassBallNo />
          <ClassBallNo />
          <ClassBallYes num={8} />
          <ClassBallYes num={9} />
          <ClassBallYes num={10} />
          <ClassBallYes num={11} />
        </section>
      </section>
    </header>
  );
}

export default CourseDetailHeader;
