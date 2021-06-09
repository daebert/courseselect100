import React, { ReactNode } from "react";
import styles from "./Mainbutton.module.css";

type MainbuttonProps = {
  children: ReactNode;
};

function Mainbutton({ children }: MainbuttonProps): JSX.Element {
  return <button className={styles.button}>{children}</button>;
}

export default Mainbutton;
