import React, { ReactNode } from "react";
import styles from "./MainButton.module.css";

type MainButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

function MainButton({
  children,
  disabled,
  onClick,
}: MainButtonProps): JSX.Element {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default MainButton;
