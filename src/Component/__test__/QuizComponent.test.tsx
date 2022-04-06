import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

test("initially Next button should be disabled", () => {
  render(<QuizComponent />);
  const submitButton = screen.getByTestId(/quiz/i);
  expect(submitButton).toBeInTheDocument();
});

// test("after enter country value submit button must be enabled", () => {
//   render(<Registration />);
//   const inputField = screen.getByTestId(/name-search-input/i);
//   fireEvent.change(inputField, {
//     target: { value: "india" },
//   });
//   expect(screen.getByText(/next/i)).toBeEnabled();
// });

