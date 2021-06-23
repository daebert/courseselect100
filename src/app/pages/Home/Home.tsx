import React from "react";
import CourseChoiceBlock from "../../components/CourseChoiceBlock/CourseChoiceBlock";
import HowToButton from "../../components/HowToButton/HowToButton";
import MainButton from "../../components/MainButton/MainButton";
import styles from "./Home.module.css";
import parseChoiceFromLocalStorage from "../../../utils/parseFromLocalStorage";

function Home(): JSX.Element {
  const choiceObject = parseChoiceFromLocalStorage();
  function send(): boolean {
    if (
      choiceObject.primary?.name === "" ||
      choiceObject.secondary?.name === "" ||
      choiceObject.tertiary?.name === ""
    )
      return true;
    return false;
  }

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
        <MainButton disabled={send()}>Senden</MainButton>
      </footer>
    </div>
  );
}

export default Home;
