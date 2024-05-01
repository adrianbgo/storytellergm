import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("NavBar", () => {
  it("renders the NavBar", () => {
    render(<NavBar />);

    const nav = screen.getByTestId("nav-bar");

    expect(nav).toBeInTheDocument();
  });

  it("renders the logo", () => {
    render(<NavBar />);

    const logo = screen.getByTestId("logo");

    expect(logo).toBeInTheDocument();
  });

  it("renders the links", () => {
    render(<NavBar />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    const adventureLink = screen.getByRole("link", {
      name: "Adventure Writing",
    });
    const blogLink = screen.getByRole("link", { name: "Blog" });
    const hireLink = screen.getByRole("link", { name: "Hire Me" });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    expect(adventureLink).toBeInTheDocument();
    expect(adventureLink).toHaveAttribute("href", "/adventures");

    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute("href", "/blog");

    expect(hireLink).toBeInTheDocument();
    expect(hireLink).toHaveAttribute("href", "/hire");
  });
});
