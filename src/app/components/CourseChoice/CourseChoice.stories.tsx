import React from "react";
import CourseChoice from "./CourseChoice";
import BinIcon from "../../assets/icons/BinIcon";
import PrimPrioBall from "../../assets/icons/PrimPrioBall";
import SecPrioBall from "../../assets/icons/SecPrioBall";
import ThirdPrioBall from "../../assets/icons/ThirdPrioBall";

export default {
  title: "Component/CourseChoice",
  component: CourseChoice,
};

export const firstChoice = (): JSX.Element => (
  <CourseChoice
    prioIcon={<PrimPrioBall />}
    courseChoice={"Tanzen"}
    binIcon={<BinIcon />}
  />
);

export const secChoice = (): JSX.Element => (
  <CourseChoice
    prioIcon={<SecPrioBall />}
    courseChoice={"Singen"}
    binIcon={<BinIcon />}
  />
);

export const thirdChoice = (): JSX.Element => (
  <CourseChoice
    prioIcon={<ThirdPrioBall />}
    courseChoice={"Basketball"}
    binIcon={<BinIcon />}
  />
);
