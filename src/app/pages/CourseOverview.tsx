import React from "react";
import BackButton from "../components/BackButton/BackButton";
import CourseCard from "../components/CourseCards/CourseCard";
import styles from "./CourseOverview.module.css";

function CourseOverview(): JSX.Element {
  return (
    <div>
      <header>
        <BackButton />
      </header>
      <main className={styles.main}>
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
      </main>
    </div>
  );
}

export default CourseOverview;
