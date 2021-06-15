import React, { ReactNode } from "react";
import styles from "./MainButton.module.css";

type MainButtonProps = {
  children: ReactNode;
  choice?: boolean;
  onClick?: () => void;
};

function MainButton({
  children,
  choice,
  onClick,
}: MainButtonProps): JSX.Element {
  return (
    <button className={styles.button} disabled={!choice} onClick={onClick}>
      {children}
    </button>
  );
}

export default MainButton;
