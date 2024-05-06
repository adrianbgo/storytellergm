import React from "react";
import { render, screen } from "@testing-library/react";
import ThreeColumn from ".";

describe("ThreeColumn", () => {
  it("renders", () => {
    render(<ThreeColumn />);

    const threeColumn = screen.getByTestId("three-column");

    expect(threeColumn).toBeInTheDocument();
  });
});
