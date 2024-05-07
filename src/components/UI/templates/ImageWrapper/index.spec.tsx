import React from "react";
import { render, screen } from "@testing-library/react";
import ImageWrapper from ".";

describe("ImageWrapper", () => {
  it("renders all components", () => {
    render(
      <ImageWrapper
        src="/images/dummy_100x800_ffffff_8744e5.png"
        alt="Test Image"
      >
        <h1>Test Title</h1>
        <p>Test Subtitle</p>
      </ImageWrapper>
    );

    const imageWrapper = screen.getByTestId("imageWrapper");

    expect(imageWrapper).toBeInTheDocument();
    expect(imageWrapper.firstChild).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fimages%2Fdummy_100x800_ffffff_8744e5.png&w=3840&q=100"
    );
    expect(imageWrapper.firstChild).toHaveAttribute("alt", "Test Image");
  });
});
