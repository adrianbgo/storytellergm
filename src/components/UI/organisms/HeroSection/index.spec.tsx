import { render, screen } from "@testing-library/react";
import React from "react";
import HeroSection from ".";

describe("HeroSection", () => {
  it("renders the Hero and all children", () => {
    render(<HeroSection />);

    const heroSection = screen.getByTestId("heroSection");
    const title = screen.getByRole("heading", { level: 1 });
    const small = screen.getByText("Bringing You the Best");

    expect(heroSection).toBeInTheDocument();
    expect(title).toHaveTextContent("Tabletop Roleplaying Games");
    expect(small).toBeInTheDocument();
  });
});
