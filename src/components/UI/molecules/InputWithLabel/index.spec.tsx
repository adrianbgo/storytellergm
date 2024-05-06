import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputWithLabel from ".";
import { FormProvider, useForm } from "react-hook-form";
import { PropsWithChildren } from "react";
import userEvent from "@testing-library/user-event";

const FormWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const methods = useForm({
    mode: "onChange",
  });

  const handleSubmit = methods.handleSubmit((data) => console.log(data));

  return (
    <FormProvider {...methods}>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        {children}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </FormProvider>
  );
};

const setup = (jsx: React.JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

describe("InputWithLabel", () => {
  it("renders with default input", () => {
    setup(
      <FormWrapper>
        <InputWithLabel
          id="test-input"
          label="Test Label"
          validation={{}}
          value="testVal"
        />
      </FormWrapper>
    );

    const input = screen.getByTestId("input");
    const label = screen.getByTestId("label");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("testVal");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Test Label");
  });

  it("renders with long input", () => {
    setup(
      <FormWrapper>
        <InputWithLabel
          id="test-input"
          label="Test Label"
          validation={{}}
          value="testVal"
          inputType="long"
        />
      </FormWrapper>
    );

    const input = screen.getByTestId("input-long");

    expect(input).toBeInTheDocument();
    expect(input).toHaveRole("textbox");
  });

  it("renders short validation error", async () => {
    const { user } = setup(
      <FormWrapper>
        <InputWithLabel
          id="test-input"
          label="Test Label"
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
        />
      </FormWrapper>
    );

    const submit = screen.getByRole("button");

    await user.click(submit);

    const error = screen.getByTestId("input-error");
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent("required");
  });

  it("renders long validation error", async () => {
    const { user } = setup(
      <FormWrapper>
        <InputWithLabel
          id="test-input"
          label="Test Label"
          validation={{
            required: {
              value: true,
              message: "required",
            },
          }}
          value=""
          inputType="long"
        />
      </FormWrapper>
    );

    const submit = screen.getByRole("button");

    await user.click(submit);

    const error = screen.getByTestId("input-error");
    expect(error).toBeInTheDocument();
    expect(error).toHaveTextContent("required");
  });
});
