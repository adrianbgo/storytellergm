import React from "react";
import { render, screen } from "@testing-library/react";
import TwoColumn from ".";

describe("TwoColumn", () => {
  it("renders", () => {
    render(<TwoColumn>Test</TwoColumn>);

    const twoColumn = screen.getByTestId("two-column");

    expect(twoColumn).toBeInTheDocument();
  });
});
