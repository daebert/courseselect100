import React, { useEffect, useState } from "react";
import { Choice, Courses } from "../../../types";

import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import BackButton from "../../components/BackButton/BackButton";
import CourseDetailHeader from "../../components/CourseDetailHeader/CourseDetailHeader";
import LongDesc from "../../components/LongDesc/LongDesc";
import MainButton from "../../components/MainButton/MainButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import useQuery from "../../hooks/useQuery";
import styles from "./CourseDetail.module.css";

type Priorities = {
  [key: string]: { icon: JSX.Element } | undefined;
};
const priorities: Priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

function CourseDetail(): JSX.Element {
  const query = useQuery();
  const priority = query.get("priority");
  const title = query.get("title");

  const [course, setCourse] = useState<Courses | null>(null);
  useEffect(() => {
    fetch(`/api/courses/${title}`)
      .then((response) => response.json())
      .then((course) => setCourse(course));
  }, []);

  const [choice, setChoice] = useLocalStorage<Choice>("choiceObject", {});
  function handleClick() {
    if (
      (priority === "primary" ||
        priority === "secondary" ||
        priority === "tertiary") &&
      title
    ) {
      const updatedChoice = { ...choice };
      updatedChoice[priority] = { name: title };
      setChoice(updatedChoice);
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.backButton}>
          <BackButton />
        </span>
        {priority && <span>{priorities[priority]?.icon}</span>}
        <span className={styles.courseName}>
          {console.log(course)}
          {course !== null ? (
            <CourseDetailHeader
              imgSrc={course.image}
              name={course.descShort}
              instructor={course.instructor}
            />
          ) : (
            <div>Daten nicht da!</div>
          )}
        </span>
      </header>
      <main className={styles.main}>
        <LongDesc children={course?.descLong} />
      </main>
      <footer>
        <MainButton onClick={handleClick} route="/dashboard">
          Kurs wählen
        </MainButton>
      </footer>
    </div>
  );
}

export default CourseDetail;
