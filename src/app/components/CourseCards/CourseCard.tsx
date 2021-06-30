import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

type CourseCardProps = {
  imgSrc: string;
  headline: string;
  priority: string | null;
  courseName: string;
};

function CourseCard({
  headline,
  imgSrc,
  priority,
  courseName,
}: CourseCardProps): JSX.Element {
  return (
    <Link
      to={`/detail?priority=${priority}&coursename=${courseName}`}
      className={styles.courseCard__link}
    >
      <div className={styles.courseCard}>
        <img className={styles.courseCard__img} src={imgSrc} />
        <h3 className={styles.courseCard__headline}>{headline}</h3>
      </div>
    </Link>
  );
}

export default CourseCard;
