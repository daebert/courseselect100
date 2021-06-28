import React from "react";
import styles from "./CourseDetailHeader.module.css";
import ClassBall from "../../assets/icons/ClassBall";
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
          <ClassBall />
          <ClassBall />
          <ClassBall />
          <ClassBall num={8} />
          <ClassBall num={9} />
          <ClassBall num={10} />
          <ClassBall num={11} />
        </section>
      </section>
    </header>
  );
}

export default CourseDetailHeader;
