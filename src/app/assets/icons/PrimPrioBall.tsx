import React from "react";

export default function PrimPrioBall(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <g transform="translate(-811 120)">
        <g
          transform="translate(811 -120)"
          fill="#b04e72"
          stroke="#b04e72"
          stroke-width="1"
        >
          <circle cx="25" cy="25" r="25" stroke="none" />
          <circle cx="25" cy="25" r="24.5" fill="none" />
        </g>
        <text
          transform="translate(836 -87)"
          fill="var(--contrast-text-color)"
          font-size="20"
          font-family="Roboto-Bold, Roboto"
          font-weight="700"
        >
          <tspan x="-5.737" y="0">
            1
          </tspan>
        </text>
      </g>
    </svg>
  );
}
