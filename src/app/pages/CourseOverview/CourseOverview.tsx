import React from "react";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";
import BackButton from "../../components/BackButton/BackButton";
import CourseCard from "../../components/CourseCards/CourseCard";
import styles from "./CourseOverview.module.css";

type CourseOverviewProps = {
  prio: "primary" | "secondary" | "tertiary";
};

const priorities = {
  primary: { icon: <PrimPrioBall /> },
  secondary: { icon: <SecPrioBall /> },
  tertiary: { icon: <ThirdPrioBall /> },
};

function CourseOverview({ prio }: CourseOverviewProps): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.backButton}>
          <BackButton />
        </span>
        <span>{priorities[prio].icon}</span>
      </header>
      <main className={styles.main}>
        <div className={styles.cards}>
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
        </div>
      </main>
    </div>
  );
}

export default CourseOverview;
