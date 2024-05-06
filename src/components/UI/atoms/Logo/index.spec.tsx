import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from ".";
import { vi } from "vitest";

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
