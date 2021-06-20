import React, { ReactNode } from "react";

type LongDescProps = {
  children: ReactNode;
};

function LongDesc({ children }: LongDescProps): JSX.Element {
  return <section>{children}</section>;
}

export default LongDesc;
