import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from ".";
describe("Footer", () => {
  it("renders", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
