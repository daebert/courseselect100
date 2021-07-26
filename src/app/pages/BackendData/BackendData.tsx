import React from "react";
import styles from "./BackendData.module.css";
import BinIcon from "../../assets/icons/BinIcon";
import InputHeadline from "../../components/InputHeadline/InputHeadline";

type BackendDataProps = {
  onDeleteClick: () => void;
};

function BackendData(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        Kursdaten Eingabe <BinIcon />
      </header>
      <main>
        <InputHeadline text={"Kurstitel"} />
      </main>
      <footer></footer>
    </div>
  );
}

export default BackendData;
