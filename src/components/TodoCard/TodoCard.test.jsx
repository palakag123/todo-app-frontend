/* eslint-disable comma-dangle */
import React from "react";
import { render, screen } from "@testing-library/react";
import TodoCard from "./index";

describe("TodoCard", () => {
  const mockTodo = "Todo";
  const mockTodoCardId = 2;
  beforeEach(() => {
    render(
      <TodoCard
        todo={{ id: mockTodoCardId, todo: mockTodo }}
        key={mockTodoCardId}
      />
    );
  });
  it("should take a snapshot for UserCard", () => {
    const { asFragment } = render(
      <TodoCard
        todo={{ id: mockTodoCardId, todo: mockTodo }}
        key={mockTodoCardId}
      />
    );
    expect(
      asFragment(
        <TodoCard
          todo={{ id: mockTodoCardId, todo: mockTodo }}
          key={mockTodoCardId}
        />
      )
    ).toMatchSnapshot();
  });
  it("should have the required elements when UserCard is rendered", () => {
    expect(screen.getByTestId("todoCard")).toBeTruthy();
    expect(screen.getByText(mockTodo)).toBeTruthy();
  });
});
