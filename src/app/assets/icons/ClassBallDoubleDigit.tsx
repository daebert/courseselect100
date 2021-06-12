import React from "react";

type ClassBallProps = {
  course: string;
};

export default function ClassBallDoubleDigit({
  course,
}: ClassBallProps): JSX.Element {
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
        transform="translate(12 19)"
        fill="var(--contrast-text-color)"
        font-size="16"
        font-family="Roboto-Regular, Roboto"
        letter-spacing="0.025em"
      >
        <tspan x="-9.184" y="0">
          {course}
        </tspan>
      </text>
    </svg>
  );
}
