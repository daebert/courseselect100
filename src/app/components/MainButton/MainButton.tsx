import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./MainButton.module.css";

type MainButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  route: string;
};

function MainButton({
  children,
  disabled,
  onClick,
  route,
}: MainButtonProps): JSX.Element {
  return (
    <Link to={route}>
      <button className={styles.button} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
}

export default MainButton;
