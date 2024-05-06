import React from "react";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AboutPage from "./page";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Lugrasimo: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}));

afterEach(() => {
  vi.clearAllMocks();
});

const setup = (jsx: React.JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

const originalWarn = console.error.bind(console.error);

beforeAll(() => {
  console.error = (msg) =>
    !msg.toString().includes("Support for defaultProps") && originalWarn(msg);
});

afterAll(() => {
  console.error = originalWarn;
});

describe("About Page", () => {
  it("renders the homepage", () => {
    render(<AboutPage />);

    const aboutPage = screen.getByTestId("about-page");

    expect(aboutPage).toBeInTheDocument();
  });

  it("runs the submit event", async () => {
    const { user } = setup(<AboutPage />);
    const logSpy = vi.spyOn(console, "log");

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const submit = screen.getByTestId("button");

    await user.type(nameInput, "Adrian Bauer");
    await user.type(emailInput, "aaa@example.com");
    await user.click(submit);

    expect(logSpy).toHaveBeenCalled();
  });
});
