import React from "react";
import CourseChoiceBlock from "../../components/CourseChoiceBlock/CourseChoiceBlock";
import HowToButton from "../../components/HowToButton/HowToButton";
import MainButton from "../../components/MainButton/MainButton";
import styles from "./Home.module.css";

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          Guten Tag <span className={styles.greatingName}>Hannes!</span>
          <br />
          Willkommen im Kurswahlsystem!
        </div>
        <div>
          <HowToButton />
        </div>
      </header>
      <main className={styles.main}>
        <h1>Meine Kursprioritäten</h1>
        <CourseChoiceBlock />
      </main>
      <footer>
        <MainButton disabled={false}>Senden</MainButton>
      </footer>
    </div>
  );
}

export default Home;
