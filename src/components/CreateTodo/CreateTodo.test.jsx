/* eslint-disable comma-dangle */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateTodo from "./index";
import { HOME_ROUTE } from "../../constants/routes";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({ useNavigate: () => mockNavigate }));
const mockSetTodos = jest.fn();

describe("CreateTodo", () => {
  const mockTodos = [{ id: 1, todo: "first todo list item" }];

  beforeEach(() => {
    render(<CreateTodo todos={mockTodos} setTodos={mockSetTodos} />);
    mockSetTodos.mockClear();
    mockNavigate.mockClear();
  });

  it("should take a snapshot for CreateTodo", () => {
    const { asFragment } = render(
      <CreateTodo todos={mockTodos} setTodos={mockSetTodos} />
    );
    expect(
      asFragment(<CreateTodo todos={mockTodos} setTodos={mockSetTodos} />)
    ).toMatchSnapshot();
  });
  it("should have the required elements when CreateTodo is rendered", () => {
    expect(screen.getByTestId("newTodoInput")).toBeTruthy();
    expect(screen.getByTestId("charCount")).toBeTruthy();
    expect(screen.getByTestId("submitButton")).toBeTruthy();
    expect(screen.getByText("SUBMIT")).toBeTruthy();
    expect(screen.getByTestId("backArrow")).toBeTruthy();
  });
  it("should call mockNavigate function with the correct route value when the home button is clicked", () => {
    fireEvent.click(screen.getByTestId("backArrowButton"));
    expect(mockNavigate).toHaveBeenCalledWith(HOME_ROUTE);
  });
  it("should change the input value when input text changes", () => {
    const mockInput = "new todo";
    fireEvent.change(screen.getByTestId("newTodoInput"), {
      target: { value: mockInput },
    });
    expect(screen.getByTestId("newTodoInput").value).toBe(mockInput);
  });
  it("should set todos and navigate to home page on submit", () => {
    const mockInput = "new todo";
    fireEvent.change(screen.getByTestId("newTodoInput"), {
      target: { value: mockInput },
    });
    fireEvent.click(screen.getByTestId("submitButton"));
    expect(mockNavigate).toHaveBeenCalledWith(HOME_ROUTE);
    expect(mockSetTodos).toHaveBeenCalledTimes(1);
  });
  it("should not navigate to home page or set todos if input empty on submit", () => {
    const mockInput = "";
    fireEvent.change(screen.getByTestId("newTodoInput"), {
      target: { value: mockInput },
    });
    fireEvent.click(screen.getByTestId("submitButton"));
    expect(mockNavigate).toHaveBeenCalledTimes(0);
    expect(mockSetTodos).toHaveBeenCalledTimes(0);
  });
  it("should show chars left", () => {
    const mockInput = "ab";
    fireEvent.change(screen.getByTestId("newTodoInput"), {
      target: { value: mockInput },
    });
    // expect(screen.getByTestId("charCount")).toEqual(
    //   `${100 - mockInput.length} characters left`
    // );
    expect(
      screen.getByText(`${100 - mockInput.length} characters left`)
    ).toBeTruthy();
  });
});
