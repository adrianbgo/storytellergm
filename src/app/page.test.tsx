import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("Home Page", () => {
  it("renders the Home Page", () => {
    render(<HomePage />);

    const homePage = screen.getByTestId("homePage");

    expect(homePage).toBeInTheDocument();
  });
});
