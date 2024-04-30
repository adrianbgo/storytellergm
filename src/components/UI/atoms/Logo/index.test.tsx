import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from ".";

describe("Logo", () => {
  it("renders on the page", () => {
    render(<Logo />);

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders the script", () => {
    render(<Logo />);

    const logo = screen.getByTestId("logo");

    expect(logo).toHaveTextContent("Storyteller GM");
  });
});
