import React from "react";
import CourseChoice from "./CourseChoice";
import PrimPrioIcon from "../../assets/icons/PrimPrioIcon";
import SecPrioIcon from "../../assets/icons/SecPrioIcon";
import ThirdPrioIcon from "../../assets/icons/ThirdPrioIcon";
import BinIcon from "../../assets/icons/BinIcon";

export default {
  title: "Component/CourseChoice",
  component: CourseChoice,
};

export const firstChoice = (): JSX.Element => (
  <CourseChoice
    prioIcon={<PrimPrioIcon />}
    courseChoice={"Tanzen"}
    binIcon={<BinIcon />}
  />
);

export const secChoice = (): JSX.Element => (
  <CourseChoice
    prioIcon={<SecPrioIcon />}
    courseChoice={"Singen"}
    binIcon={<BinIcon />}
  />
);

export const thirdChoice = (): JSX.Element => (
  <CourseChoice
    prioIcon={<ThirdPrioIcon />}
    courseChoice={"Basketball"}
    binIcon={<BinIcon />}
  />
);
