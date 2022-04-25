/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import TodoListPage from "./index";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({ useNavigate: () => mockNavigate }));

describe("TodoListPage", () => {
  const mockTodos = [
    { id: 1, todo: "first todo list item" },
    { id: 2, todo: "second todo list item" },
  ];

  beforeEach(() => {
    render(<TodoListPage todos={mockTodos} />);
  });

  it("should take a snapshot for TodoListPage", () => {
    const { asFragment } = render(<TodoListPage todos={mockTodos} />);
    expect(asFragment(<TodoListPage todos={mockTodos} />)).toMatchSnapshot();
  });
  it("should have the required elements when TodoListPage is rendered", () => {
    expect(screen.findAllByText("first todo list item")).toBeTruthy();
    expect(screen.findAllByText("second todo list item")).toBeTruthy();
    expect(screen.findAllByText("HI, USER")).toBeTruthy();
  });
});
