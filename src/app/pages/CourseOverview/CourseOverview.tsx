import React, { useEffect, useState } from "react";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import BackButton from "../../components/BackButton/BackButton";
import CourseCard from "../../components/CourseCards/CourseCard";
import useQuery from "../../hooks/useQuery";
import styles from "./CourseOverview.module.css";
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
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/api/coursedata")
      .then((response) => response.json())
      .then((courses) => setCourses(courses));
  }, []);
  console.log(courses);

  const courseNameArray = courses.map((course) => course.courseName);

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
          <CourseCard
            imgSrc="images/basketball.png"
            headline="Basketball"
            body="Hier kann man Basketball spielen und tolle Tricks lernen!"
          />
          <CourseCard
            imgSrc="/images/basketball.png"
            headline="Basketball"
            body="Hier kann man Basketball spielen und tolle Tricks lernen!"
          />
          <CourseCard
            imgSrc="../../images/basketball.png"
            headline="Basketball"
            body="Hier kann man Basketball spielen und tolle Tricks lernen!"
          />
          <CourseCard
            imgSrc="/images/basketball.png"
            headline="Basketball"
            body="Hier kann man Basketball spielen und tolle Tricks lernen!"
          />
          <CourseCard
            imgSrc="/images/basketball.png"
            headline="Basketball"
            body="Hier kann man Basketball spielen und tolle Tricks lernen!"
          />
          <CourseCard
            imgSrc="/images/basketball.png"
            headline="Basketball"
            body="Hier kann man Basketball spielen und tolle Tricks lernen!"
          />
          <CourseCard
            imgSrc="/images/basketball.png"
            headline="Basketball"
            body="Hier kann man Basketball spielen und tolle Tricks lernen!"
          />
        </div>
      </main>
    </div>
  );
}

export default CourseOverview;
