import React from "react";
import BackButton from "./BackButton";
import BackArrowIcon from "../../assets/Icons/BackArrowIcon";

export default {
  title: "Component/BackButton",
  component: BackButton,
};

export const Back = (): JSX.Element => <BackButton icon={<BackArrowIcon />} />;
