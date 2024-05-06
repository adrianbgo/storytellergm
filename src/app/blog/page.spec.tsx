import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPage from "./page";

describe("Blog Page", () => {
  it("renders the Blog Page", () => {
    render(<BlogPage />);

    const blogPage = screen.getByTestId("blogPage");

    expect(blogPage).toBeInTheDocument();
  });
});
