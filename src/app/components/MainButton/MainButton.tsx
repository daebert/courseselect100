import React, { ReactNode } from "react";
import styles from "./MainButton.module.css";

type MainButtonProps = {
  children: ReactNode;
};

function MainButton({ children }: MainButtonProps): JSX.Element {
  return <button className={styles.button}>{children}</button>;
}

export default MainButton;
