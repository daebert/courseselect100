import React from "react";
import styles from "./BackButton.module.css";
import { useHistory } from "react-router-dom";
import BackArrowIcon from "../../assets/icons/BackArrowIcon";

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      <BackArrowIcon />
      Zurück
    </button>
  );
}

export default BackButton;
