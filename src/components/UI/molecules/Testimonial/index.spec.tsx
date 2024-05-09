import { render, screen } from "@testing-library/react";
import React from "react";
import Testimonial from ".";

describe("Testimonial", () => {
  it("renders a testimonial with the proper content", () => {
    render(
      <Testimonial author="John Day" quote="Lorem IpsuM" title="Test Title" />
    );

    const testimonial = screen.getByTestId("testimonial");
    const quote = screen.getByTestId("quote");
    const author = screen.getByTestId("author");
    const title = screen.getByTestId("title");

    expect(testimonial).toBeInTheDocument();
    expect(quote).toBeInTheDocument();
    expect(quote).toHaveTextContent("Lorem IpsuM");
    expect(author).toBeInTheDocument();
    expect(author).toHaveTextContent("John Day");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Test Title");
  });
});
