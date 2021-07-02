import React from "react";
import styles from "./CourseCard.module.css";
import { useHistory } from "react-router-dom";

type CourseCardProps = {
  img: string;
  text: string;
  priority: string | null;
  title: string;
  disabled: boolean;
};

function CourseCard({
  text,
  img,
  priority,
  title,
  disabled,
}: CourseCardProps): JSX.Element {
  const history = useHistory();
  return (
    <button
      className={styles.courseCard}
      disabled={disabled}
      onClick={() =>
        history.push(`/detail?priority=${priority}&title=${title}`)
      }
    >
      <img className={styles.courseCard__img} src={img} />
      <div className={styles.courseCard__text}>{text}</div>
    </button>
  );
}

export default CourseCard;
