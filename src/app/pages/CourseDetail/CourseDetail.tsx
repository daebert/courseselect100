import React, { useEffect, useState } from "react";
import { Courses } from "../../../types";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import BackButton from "../../components/BackButton/BackButton";
import CourseDetailHeader from "../../components/CourseDetailHeader/CourseDetailHeader";
import LongDesc from "../../components/LongDesc/LongDesc";
import MainButton from "../../components/MainButton/MainButton";
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
  const courseName = query.get("coursename");

  const [course, setCourse] = useState<Courses | null>(null);
  useEffect(() => {
    fetch(`/api/courses/${courseName}`)
      .then((response) => response.json())
      .then((course) => setCourse(course));
  }, []);

  function handleClick() {
    function parseChoiceFromLocalStorage() {
      const json = localStorage.getItem("choiceObject");
      if (json === null) {
        return {};
      }
      const data = JSON.parse(json);
      return data;
    }

    const choiceObject = parseChoiceFromLocalStorage();

    if (priority) {
      choiceObject[priority] = { name: courseName };
    }

    localStorage.setItem("choiceObject", JSON.stringify(choiceObject));
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.backButton}>
          <BackButton />
        </span>
        {priority && <span>{priorities[priority]?.icon}</span>}
        <span className={styles.courseName}>
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
