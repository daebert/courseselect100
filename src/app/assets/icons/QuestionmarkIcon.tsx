import React from "react";

export default function QuestionmarkIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
    >
      <g transform="translate(-184 -237)">
        <g
          transform="translate(184 238)"
          fill="var(--primary-border-color)"
          stroke="var(--primary-border-color)"
          stroke-width="1"
        >
          <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
          <circle cx="12.5" cy="12.5" r="12" fill="none" />
        </g>
        <text
          transform="translate(197 258)"
          fill="var(--contrast-text-color)"
          font-size="20"
          font-family="Roboto-Bold, Roboto"
          font-weight="700"
        >
          <tspan x="-4.976" y="0">
            ?
          </tspan>
        </text>
      </g>
    </svg>
  );
}
