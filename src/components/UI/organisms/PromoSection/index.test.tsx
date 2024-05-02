import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PromoSection from ".";

describe("PromoSection", () => {
  it("renders", () => {
    render(<PromoSection />);

    const promo = screen.getByTestId("promo-section");

    expect(promo).toBeInTheDocument();
  });
});
