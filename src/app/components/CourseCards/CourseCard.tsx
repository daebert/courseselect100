import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

type CourseCardProps = {
  imgSrc: string;
  headline: string;
  priority: string | null;
  title: string;
  disabled: boolean;
};

function CourseCard({
  headline,
  imgSrc,
  priority,
  title,
  disabled,
}: CourseCardProps): JSX.Element {
  return (
    <button className={styles.courseCard__link} disabled={disabled}>
      <Link
        to={`/detail?priority=${priority}&title=${title}`}
        className={styles.courseCard}
      >
        <img className={styles.courseCard__img} src={imgSrc} />
        <h3 className={styles.courseCard__headline}>{headline}</h3>
      </Link>
    </button>
  );
}

export default CourseCard;
