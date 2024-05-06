import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from ".";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import styles from "./index.module.css";

vi.mock("next/font/google", () => ({
  Lugrasimo: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}));

afterEach(() => {
  vi.clearAllMocks();
});

const setup = (jsx: React.JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};

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

  it("hides the links when not isOpen and shows when isOpen", async () => {
    const { user } = setup(<NavBar />);
    const navLinks = screen.getByTestId("navLinks");
    expect(navLinks).toBeInTheDocument();

    resizeWindow(500, 300);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(navLinks).toHaveClass("false");

    await user.click(icon);

    expect(navLinks).toHaveClass(styles.linksShown);
  });
});
