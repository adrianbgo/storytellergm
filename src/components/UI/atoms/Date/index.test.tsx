import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Date from ".";

describe("Date", () => {
  it("correctly formats the date", () => {
    render(<Date dateString={"2015-03-25"} />);

    const date = screen.getByRole("time");

    expect(date).toHaveTextContent("Mar 25, 2015");
  });
});
