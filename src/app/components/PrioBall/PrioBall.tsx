import React from "react";

type PrioIconProps = {
  icon: JSX.Element;
};

export default function PrioIcon({ icon }: PrioIconProps): JSX.Element {
  return <div>{icon}</div>;
}
