import React from "react";
import { render, screen } from "@testing-library/react";
import AllTodoCards from "./index";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({ useNavigate: () => mockNavigate }));

describe("AllTodoCards", () => {
  const mockTodos = [
    { id: 1, todo: "first todo list item" },
    { id: 2, todo: "second todo list item" },
  ];
  beforeEach(() => {
    render(<AllTodoCards todos={mockTodos} />);
  });
  it("should take a snapshot for AllTodoCards", () => {
    const { asFragment } = render(<AllTodoCards todos={mockTodos} />);
    expect(asFragment(<AllTodoCards todos={mockTodos} />)).toMatchSnapshot();
  });
  it("should have the required elements when AllTodoCards is rendered", () => {
    expect(screen.findAllByText("first todo list item")).toBeTruthy();
    expect(screen.findAllByText("second todo list item")).toBeTruthy();
    expect(screen.getByTestId("allCards")).toBeTruthy();
    expect(screen.getByTestId("allCardsInner")).toBeTruthy();
  });
});
