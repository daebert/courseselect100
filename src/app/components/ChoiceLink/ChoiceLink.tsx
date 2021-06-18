import React from "react";
import { Link } from "react-router-dom";
import styles from "./ChoiceLink.module.css";

type ChoiceLinkProps = {
  link: string;
};

function ChoiceLink({ link }: ChoiceLinkProps): JSX.Element {
  return (
    <Link to={link} className={styles.link}>
      Zur Kurswahl
    </Link>
  );
}

export default ChoiceLink;
