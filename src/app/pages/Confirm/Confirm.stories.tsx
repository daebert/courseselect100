import React from "react";
import Confirm from "./Confirm";
import { Meta } from "@storybook/react";

export default {
  title: "Page/Confirm",
  component: Confirm,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = (): JSX.Element => <Confirm />;
