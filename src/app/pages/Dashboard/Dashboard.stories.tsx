import React from "react";
import Dashboard from "./Home";
import { Meta } from "@storybook/react";

export default {
  title: "Page/Dashboard",
  component: Dashboard,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default = (): JSX.Element => <Dashboard />;
