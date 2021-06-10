import React from "react";
import styles from "./PrioBall.module.css";

type PrioIconProps = {
  icon: JSX.Element;
};

export default function PrioIcon({ icon }: PrioIconProps): JSX.Element {
  return <div>{icon}</div>;
}
