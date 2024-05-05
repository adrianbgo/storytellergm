import "@testing-library/jest-dom";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import ContactForm from ".";
import userEvent from "@testing-library/user-event";

const setup = (jsx: React.JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

describe("ContactForm", () => {
  it("renders", () => {
    const mockSubmit = jest.fn();
    const { user } = setup(<ContactForm onSubmit={mockSubmit} />);

    const form = screen.getByTestId("contact-form");
    expect(form).toBeInTheDocument();
  });

  it("validates", async () => {
    const mockSubmit = jest.fn();
    const { user } = setup(<ContactForm onSubmit={mockSubmit} />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const submit = screen.getByTestId("button");

    await user.click(submit);
    expect(mockSubmit).not.toHaveBeenCalled();

    await user.type(nameInput, "Adrian Bauer");
    await user.type(emailInput, "aaa@example.com");
    await user.click(submit);
    expect(mockSubmit).toHaveBeenCalled();
  });

  it("submits", async () => {
    const mockSubmit = jest.fn();
    const { user } = setup(<ContactForm onSubmit={mockSubmit} />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const submit = screen.getByTestId("button");

    await user.type(nameInput, "Adrian Bauer");
    await user.type(emailInput, "aaa@example.com");
    const form = screen.getByTestId("contact-form");
    const submitEvent = createEvent.submit(form);

    fireEvent(form, submitEvent);

    expect(submitEvent.defaultPrevented).toBe(true);
  });
});
