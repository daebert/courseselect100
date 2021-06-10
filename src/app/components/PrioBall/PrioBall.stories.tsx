import React from "react";
import PrimPrioIcon from "../../assets/icons/PrimPrioIcon";
import SecPrioIcon from "../../assets/icons/SecPrioIcon";
import ThirdPrioIcon from "../../assets/icons/ThirdPrioIcon";
import PrioIcon from "./PrioBall";

export default {
  title: "Component/PrioIcon",
  component: PrioIcon,
};

export const PrioIcon1 = (): JSX.Element => (
  <PrioIcon icon={<PrimPrioIcon />} />
);

export const PrioIcon2 = (): JSX.Element => <PrioIcon icon={<SecPrioIcon />} />;

export const PrioIcon3 = (): JSX.Element => (
  <PrioIcon icon={<ThirdPrioIcon />} />
);
