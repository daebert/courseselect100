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
    <header className={styles.container}>
      <div className={styles.desc}>
        <section>
          <RoundImage imageSrc={imgSrc} />
        </section>
        <section className={styles.text}>
          <span>{name}</span>
          <span className={styles.instructor}>Kursleiter: {instructor}</span>
        </section>
        <span className={styles.class}>Jahrgang</span>
        <span className={styles.classballs}>
          <ClassBall />
          <ClassBall />
          <ClassBall />
          <ClassBall num={8} />
          <ClassBall num={9} />
          <ClassBall num={10} />
          <ClassBall num={11} />
        </span>
      </div>
    </header>
  );
}

export default CourseDetailHeader;
