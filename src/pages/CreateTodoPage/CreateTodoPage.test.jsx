/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import CreateTodoPage from "./index";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({ useNavigate: () => mockNavigate }));

describe("CreateTodoPage", () => {
  const mockTodos = [
    { id: 1, todo: "first todo list item" },
    { id: 2, todo: "second todo list item" },
  ];
  const mockSetTodos = jest.fn();

  beforeEach(() => {
    render(<CreateTodoPage todos={mockTodos} setTodos={mockSetTodos} />);
    mockSetTodos.mockClear();
  });

  it("should take a snapshot for CreateTodoPage", () => {
    const { asFragment } = render(
      <CreateTodoPage todos={mockTodos} setTodos={mockSetTodos} />
    );
    expect(
      asFragment(<CreateTodoPage todos={mockTodos} setTodos={mockSetTodos} />)
    ).toMatchSnapshot();
  });
  it("should have the required elements when CreateTodoPage is rendered", () => {
    expect(screen.findAllByText("SUBMIT")).toBeTruthy();
    expect(screen.findAllByText("HI, USER")).toBeTruthy();
  });
});
