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
  const button = screen.getByTestId(/next/i);
  expect(button).toBeDisabled();
});

test("after enter name value next button must be enabled", () => {
  render(<Registration />);
  const inputField = screen.getByTestId(/name-search-input/i);
  fireEvent.change(inputField, {
    target: { value: "test" },
  });
  expect(screen.getByText(/next/i)).toBeEnabled();
});

test("gender radio buttons should be present", () => {
  render(<Registration />);
  const element = screen.getByTestId(/gender/i);
  expect(element).toBeInTheDocument();
})

test("language drop-down should be present", () => {
  render(<Registration />);
  const element = screen.getByTestId(/language/i);
  expect(element).toBeInTheDocument();
})
