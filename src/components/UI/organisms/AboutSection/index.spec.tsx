import React from "react";
import { render, screen } from "@testing-library/react";
import AboutSection from ".";

describe("AboutSection", () => {
  it("renders", () => {
    render(<AboutSection />);

    const about = screen.getByTestId("about-section");

    expect(about).toBeInTheDocument();
  });
});
