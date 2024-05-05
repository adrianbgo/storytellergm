import "@testing-library/jest-dom";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import Page from "./page";
import userEvent from "@testing-library/user-event";

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

describe("Page", () => {
  it("renders the homepage", () => {
    render(<Page />);

    const homePage = screen.getByTestId("home-page");

    expect(homePage).toBeInTheDocument();
  });

  it("runs the submit event", async () => {
    const { user } = setup(<Page />);
    const logSpy = jest.spyOn(console, "log");

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const submit = screen.getByTestId("button");

    await user.type(nameInput, "Adrian Bauer");
    await user.type(emailInput, "aaa@example.com");
    await user.click(submit);

    expect(logSpy).toHaveBeenCalled();
  });
});
