import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainButton from "./MainButton";

test("renders Start Button", () => {
  render(<MainButton choice={false}>Senden</MainButton>);
  expect(screen.getByRole("button").innerHTML).toContain("Senden");
});

test("calls onClick", () => {
  const handleClick = jest.fn();
  render(<MainButton onClick={handleClick}>Click me!</MainButton>);

  fireEvent.click(screen.getByRole("button"));

  expect(handleClick).toBeCalled();
});
