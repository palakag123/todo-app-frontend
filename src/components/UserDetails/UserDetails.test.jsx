import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetails from "./index";

describe("UserDetails", () => {
  beforeEach(() => {
    render(<UserDetails />);
  });
  it("should take a snapshot for UserDetails component", () => {
    const { asFragment } = render(<UserDetails />);
    expect(asFragment(<UserDetails />)).toMatchSnapshot();
  });
  it("should have elements required when rendered", () => {
    expect(screen.getByTestId("userImg")).toBeTruthy();
    expect(screen.getByTestId("greeting")).toBeTruthy();
    expect(screen.getByText("HI, USER")).toBeTruthy();
    expect(screen.getByTestId("time")).toBeTruthy();
    expect(screen.getByTestId("date")).toBeTruthy();
  });
});
