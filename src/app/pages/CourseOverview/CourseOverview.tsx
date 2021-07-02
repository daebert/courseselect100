import React, { useEffect, useState } from "react";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import BackButton from "../../components/BackButton/BackButton";
import CourseCard from "../../components/CourseCards/CourseCard";
import useQuery from "../../hooks/useQuery";
import styles from "./CourseOverview.module.css";
import { Courses } from "../../../types";
import parseChoiceFromLocalStorage from "../../utils/parseFromLocalStorage";
type Priorities = {
  [key: string]: { icon: JSX.Element } | undefined;
};
const priorities: Priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

function CourseOverview(): JSX.Element {
  const query = useQuery();
  const priority = query.get("priority");

  const [courses, setCourses] = useState<Courses[]>([]);
  useEffect(() => {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((courses) => setCourses(courses));
  }, []);

  const choiceObject = parseChoiceFromLocalStorage();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.backButton}>
          <BackButton />
        </span>
        {priority && <span>{priorities[priority]?.icon}</span>}
      </header>
      <main className={styles.main}>
        <div className={styles.cards}>
          {courses.map((course) => (
            <CourseCard
              img={course.image}
              text={course.descShort}
              priority={priority}
              title={course.title}
              disabled={
                course.title === choiceObject.primary?.name ||
                course.title === choiceObject.secondary?.name ||
                course.title === choiceObject.tertiary?.name
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default CourseOverview;
