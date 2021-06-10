import React from "react";
import styles from "./CourseChoice.module.css";

type CourseChoiceProps = {
  prioIcon: React.SVGProps<SVGSVGElement>;
  courseChoice: string;
  binIcon: React.SVGProps<SVGSVGElement>;
};

function CourseChoice({
  prioIcon,
  courseChoice,
  binIcon,
}: CourseChoiceProps): JSX.Element {
  return (
    <div className={styles.courseChoice}>
      <span>{prioIcon}</span>
      <span>{courseChoice}</span>
      <span>{binIcon}</span>
    </div>
  );
}

export default CourseChoice;
