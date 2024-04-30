import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavLink from ".";

describe("NavLink", () => {
  it("renders the NavLink without errors", () => {
    render(<NavLink href="/">Test Link</NavLink>);

    const navLink = screen.getByTestId("nav-link");

    expect(navLink).toBeInTheDocument();
  });

  it("adds the correct href", () => {
    render(<NavLink href="/">Test Link</NavLink>);

    const navLink = screen.getByRole("link", { name: "Test Link" });

    expect(navLink).toHaveAttribute("href", "/");
  });
});
