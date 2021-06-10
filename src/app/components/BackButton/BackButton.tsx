import React from "react";
import styles from "./BackButton.module.css";
import { useHistory } from "react-router-dom";

type BackButtonProps = {
  icon: React.SVGProps<SVGSVGElement>;
};

function BackButton({ icon }: BackButtonProps): JSX.Element {
  const history = useHistory();

  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      <span className={styles.backArrow}>{icon}</span>
      Zurück
    </button>
  );
}

export default BackButton;
