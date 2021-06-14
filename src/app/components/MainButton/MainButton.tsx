import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./MainButton.module.css";

type MainButtonProps = {
  children: ReactNode;
  choice: boolean;
};

function MainButton({ children, choice }: MainButtonProps): JSX.Element {
  return (
    <button
      className={styles.button}
      disabled={!choice}
      onClick={() => <Link to="#" />}
    >
      {children}
    </button>
  );
}

export default MainButton;
