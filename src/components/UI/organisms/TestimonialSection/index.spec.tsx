import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialSection from ".";
import { testTestimonials } from "@/constants/testimonials";

describe("TestimonialSection", () => {
  it("renders with all children", () => {
    render(<TestimonialSection testimonials={testTestimonials} />);
    const section = screen.getByTestId("testimonials");
    expect(section).toBeInTheDocument();
    expect(section.firstChild).toHaveRole("heading");
  });
});
