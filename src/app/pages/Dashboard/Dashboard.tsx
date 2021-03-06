import React from "react";
import CourseChoiceBlock from "../../components/CourseChoiceBlock/CourseChoiceBlock";
import HowToButton from "../../components/HowToButton/HowToButton";
import MainButton from "../../components/MainButton/MainButton";
import styles from "./Dashboard.module.css";
import parseChoiceFromLocalStorage from "../../utils/parseFromLocalStorage";
import { saveChoiceData } from "../../api/choices";

function Home(): JSX.Element {
  const choiceObject = parseChoiceFromLocalStorage();
  const isReady =
    choiceObject.primary?.name &&
    choiceObject.secondary?.name &&
    choiceObject.tertiary?.name;

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
        <MainButton
          disabled={!isReady}
          route="/confirm"
          onClick={() => saveChoiceData(choiceObject)}
        >
          Senden
        </MainButton>
      </footer>
    </div>
  );
}

export default Home;
