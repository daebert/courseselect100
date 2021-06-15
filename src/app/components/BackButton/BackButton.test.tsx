import React from "react";
import { render, screen } from "@testing-library/react";
import BackButton from "./BackButton";

test("renders BackButton", () => {
  render(<BackButton />);
  expect(screen.getByRole("button").innerHTML).toContain("Zurück");
});
