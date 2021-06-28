import React from "react";

type ClassBallProps = {
  num?: number;
};

export default function ClassBallDoubleDigit({
  num: num,
}: ClassBallProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
    >
      {num && (
        <g
          fill={num ? "var(--primary-color)" : "none"}
          stroke="var(--primary-color)"
          stroke-width="1"
        >
          <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
          <circle cx="12.5" cy="12.5" r="12" fill="none" />
        </g>
      )}
      {num && (
        <text
          transform="translate(12 19)"
          fill="var(--contrast-text-color)"
          font-size="16"
          font-family="Roboto-Regular, Roboto"
          letter-spacing="0.025em"
        >
          <tspan x={num > 9 ? -9.184 : -4.492} y="0">
            {num}
          </tspan>
        </text>
      )}
    </svg>
  );
}
