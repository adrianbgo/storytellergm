import React from "react";
import { render, screen } from "@testing-library/react";
import PromoSection from ".";
import { vi } from "vitest";

const originalWarn = console.error.bind(console.error);

beforeAll(() => {
  console.error = (msg) =>
    !msg.toString().includes("Support for defaultProps") && originalWarn(msg);
});

afterEach(() => {
  vi.clearAllMocks();
});

afterAll(() => {
  console.error = originalWarn;
});

describe("PromoSection", () => {
  it("renders", () => {
    render(<PromoSection />);

    const promo = screen.getByTestId("promo-section");

    expect(promo).toBeInTheDocument();
  });
});
