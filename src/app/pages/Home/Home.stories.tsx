import React from "react";
import Home from "./Home";
import { Meta } from "@storybook/react";

export default {
  title: "Page/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = (): JSX.Element => <Home />;
