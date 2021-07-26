import React from "react";
import styles from "./BackendData.module.css";
import InputHeadline from "../../components/InputHeadline/InputHeadline";

function BackendData(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>Kursdaten Eingabe</header>
      <main>
        <InputHeadline text={"Kurstitel"} />
      </main>
      <footer></footer>
    </div>
  );
}

export default BackendData;
