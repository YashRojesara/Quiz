import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Registration from "../Registration";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test("should render component correctly", () => {
  render(<Registration />);
});

test("initially Next button should be disabled", () => {
  render(<Registration />);
  const submitButton = screen.getByTestId(/next/i);
  expect(submitButton).toBeDisabled();
});

test("after enter country value submit button must be enabled", () => {
  render(<Registration />);
  const inputField = screen.getByTestId(/name-search-input/i);
  fireEvent.change(inputField, {
    target: { value: "india" },
  });
  expect(screen.getByText(/next/i)).toBeEnabled();
});
