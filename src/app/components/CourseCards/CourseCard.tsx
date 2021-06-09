import React from "react";
import styles from "./CourseCard.module.css";

type CourseCardProps = {
  imgSrc: string;
  headline: string;
  body: string;
};

function CourseCard({ headline, body, imgSrc }: CourseCardProps): JSX.Element {
  return (
    <div className={styles.courseCard}>
      <img className={styles.courseCard__img} src={imgSrc} />
      <h3 className={styles.courseCard__headline}>{headline}</h3>
      <span className={styles.courseCard__body}>{body}</span>
    </div>
  );
}

export default CourseCard;
