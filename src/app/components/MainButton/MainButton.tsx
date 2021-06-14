import React, { ReactNode } from "react";
import styles from "./MainButton.module.css";

type MainButtonProps = {
  children: ReactNode;
  choice: boolean;
};

function MainButton({ children, choice }: MainButtonProps): JSX.Element {
  return (
    <button disabled={!choice} className={styles.button}>
      {children}
    </button>
  );
}

export default MainButton;
