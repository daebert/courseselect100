import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./MainButton.module.css";

type MainButtonProps = {
  children: ReactNode;
  choice?: boolean;
  props?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
};

function MainButton({ children, choice, props }: MainButtonProps): JSX.Element {
  return (
    <button
      className={styles.button}
      disabled={!choice}
      onClick={() => <Link to="#" />}
      {...props}
    >
      {children}
    </button>
  );
}

export default MainButton;
