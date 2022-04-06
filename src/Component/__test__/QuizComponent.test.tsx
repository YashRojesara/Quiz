import React from "react";
import { render, screen } from "@testing-library/react";
import QuizComponent from "../QuizComponent";

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
      push: jest.fn()
    })
}));

test("should render component correctly", () => {
  render(<QuizComponent />);
});

test("quiz should be in the page", () => {
  render(<QuizComponent />);
  const element = screen.getByTestId(/quiz/i);
  expect(element).toBeInTheDocument();
});

test("Name & Gender should be in the page", () => {
  render(<QuizComponent />);
  const element = screen.getByTestId(/identity/i);
  expect(element).toBeInTheDocument();
});
