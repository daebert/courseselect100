import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
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
    <Link to="/">
      <button className={styles.button} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
}

export default MainButton;
