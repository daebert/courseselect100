import React, { useState } from "react";
import LabeledInput from "./LabeledInput";

export default {
  title: "Component/LabeledInput",
  component: "LabeledInput",
};
const [email, setEmail] = useState("");

export const Email = (): JSX.Element => (
  <LabeledInput
    placeholder="E-Mail"
    type="email"
    value={email}
    onChange={setEmail}
  />
);
