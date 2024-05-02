import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TwoColumn from ".";

describe("TwoColumn", () => {
  it("renders", () => {
    render(<TwoColumn />);

    const twoColumn = screen.getByTestId("two-column");

    expect(twoColumn).toBeInTheDocument();
  });
});
