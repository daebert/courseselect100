import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

type CourseCardProps = {
  imgSrc: string;
  headline: string;
  body: string;
  priority: string | null;
};

function CourseCard({
  headline,
  body,
  imgSrc,
  priority,
}: CourseCardProps): JSX.Element {
  return (
    <div className={styles.courseCard}>
      <img className={styles.courseCard__img} src={imgSrc} />
      <h3 className={styles.courseCard__headline}>{headline}</h3>
      <span className={styles.courseCard__body}>{body}</span>
      <Link to={`/detail?priority=${priority}`} />
    </div>
  );
}

export default CourseCard;
