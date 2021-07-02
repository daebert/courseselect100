import React from "react";
import styles from "./CourseCard.module.css";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  return (
    <button
      className={styles.courseCard__link}
      disabled={disabled}
      onClick={() =>
        history.push(`/detail?priority=${priority}&title=${title}`)
      }
    >
      <img className={styles.courseCard__img} src={imgSrc} />
      <h3 className={styles.courseCard__headline}>{headline}</h3>
    </button>
  );
}

export default CourseCard;
