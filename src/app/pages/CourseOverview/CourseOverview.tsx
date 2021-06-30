import React, { useEffect, useState } from "react";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import BackButton from "../../components/BackButton/BackButton";
import CourseCard from "../../components/CourseCards/CourseCard";
import useQuery from "../../hooks/useQuery";
import styles from "./CourseOverview.module.css";
import { Courses } from "../../../types";
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
              imgSrc={course.image}
              headline={course.descShort}
              priority={priority}
              coursename={course.name}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default CourseOverview;
