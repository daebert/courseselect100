import React from "react";
import { render, screen } from "@testing-library/react";
import BackArrowIcon from "../../assets/icons/BackArrowIcon";
import BackButton from "./BackButton";

test("renders BackButton", () => {
  render(<BackButton icon={<BackArrowIcon />} />);
  expect(screen.getByRole("button").innerHTML).toContain("Hallo");
});
