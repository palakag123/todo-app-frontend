import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AllTodos from "./index";
import { CREATE_TODO_ROUTE } from "../../constants/routes";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({ useNavigate: () => mockNavigate }));

describe("AllTodos", () => {
  const mockTodos = [{ id: 1, todo: "first todo list item" }];
  beforeEach(() => {
    render(<AllTodos todos={mockTodos} />);
  });
  it("should take a snapshot for AllTodos", () => {
    const { asFragment } = render(<AllTodos todos={mockTodos} />);
    expect(asFragment(<AllTodos todos={mockTodos} />)).toMatchSnapshot();
  });
  it("should have the required elements when AllTodos is rendered", () => {
    expect(screen.getByTestId("allTodoHeading")).toBeTruthy();
    expect(screen.getByText("ALL TO-DOS")).toBeTruthy();
    expect(screen.findAllByText("first todo list item")).toBeTruthy();
    expect(screen.getByTestId("newTodoButton")).toBeTruthy();
    expect(screen.getByText("CREATE NEW")).toBeTruthy();
  });
  it("should call mockNavigate function with the correct route value when the button is clicked", () => {
    fireEvent.click(screen.getByTestId("newTodoButton"));
    expect(mockNavigate).toHaveBeenCalledWith(CREATE_TODO_ROUTE);
  });
});
