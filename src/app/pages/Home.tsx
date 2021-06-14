import React from "react";
import CourseChoice from "../components/CourseChoice/CourseChoice";
import HowToButton from "../components/HowToButton/HowToButton";
import MainButton from "../components/MainButton/MainButton";
import styles from "./Home.module.css";

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        Guten Tag <span className={styles.greatingName}>Hannes!</span>
        <br />
        Willkommen im Kurswahlsystem!
        <HowToButton />
      </header>
      <main>
        <h1>Meine Kursprioritäten</h1>
        <div>
          <CourseChoice prio="primary" name="Tanzen" />
          <CourseChoice prio="secondary" name="Hüpfen" />
          <CourseChoice prio="tertiary" name="" />
        </div>
      </main>
      <footer>
        <MainButton children="Senden" />
      </footer>
    </div>
  );
}

export default Home;
