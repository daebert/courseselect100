import React from "react";

type ClassBallProps = {
  num: string;
};

export default function ClassBallYes({ num }: ClassBallProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
    >
      <g
        fill="var(--primary-color)"
        stroke="var(--primary-color)"
        stroke-width="1"
      >
        <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
        <circle cx="12.5" cy="12.5" r="12" fill="none" />
      </g>
      <text
        id="_11"
        data-name="11"
        transform="translate(0 2)"
        fill="var(--contrast-text-color)"
        font-size="16"
        font-family="Roboto-Regular, Roboto"
        letter-spacing="0.025em"
      >
        <tspan x="-9.184" y="17">
          {num}
        </tspan>
      </text>
    </svg>
  );
}
