import React from "react";
import styles from "./CourseChoice.module.css";
import BinIcon from "../../assets/icons/BinIcon";

type CourseChoiceProps = {
  prioIcon: React.SVGProps<SVGSVGElement>;
  courseChoice: string;
  binIcon: React.SVGProps<SVGSVGElement>;
};

function CourseChoice({
  prioIcon,
  courseChoice,
}: CourseChoiceProps): JSX.Element {
  return (
    <div className={styles.courseChoice}>
      <span>{prioIcon}</span>
      <span>{courseChoice}</span>
      {<BinIcon />}
    </div>
  );
}

export default CourseChoice;
