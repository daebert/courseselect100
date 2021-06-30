import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

type CourseCardProps = {
  imgSrc: string;
  headline: string;
  priority: string | null;
  title: string;
};

function CourseCard({
  headline,
  imgSrc,
  priority,
  title,
}: CourseCardProps): JSX.Element {
  return (
    <Link
      to={`/detail?priority=${priority}&title=${title}`}
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
