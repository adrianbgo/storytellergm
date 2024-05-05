import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PromoSection from ".";

const originalWarn = console.error.bind(console.error);

beforeAll(() => {
  console.error = (msg) =>
    !msg.toString().includes("Support for defaultProps") && originalWarn(msg);
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
