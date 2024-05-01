import { Meta, StoryObj } from "@storybook/react";
import InputWithLabel from ".";
import { FormProvider, useForm } from "react-hook-form";

const meta = {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
  tags: ["autodocs"],
  args: {
    label: "test label",
    id: "test-id",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      minLength: {
        value: 6,
        message: "too short",
      },
    },
  },
  render: (props) => {
    const methods = useForm({
      mode: "onChange",
    });

    const onSubmit = methods.handleSubmit((data) => {
      console.log(data);
    });
    return (
      <FormProvider {...methods}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <InputWithLabel {...props} />
          <button type="submit" onClick={onSubmit}>
            Submit Form
          </button>
        </form>
      </FormProvider>
    );
  },
} as Meta<typeof InputWithLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidatedInput: Story = {
  args: {
    value: "Test",
  },

  render: (props) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form>
          <InputWithLabel {...props} />
        </form>
      </FormProvider>
    );
  },
};

export const LongInput: Story = {
  args: {
    inputType: "long",
  },
  render: (props) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form>
          <InputWithLabel {...props} />
        </form>
      </FormProvider>
    );
  },
};

export const EmailInput: Story = {
  args: {
    inputType: "email",
  },
  render: (props) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form>
          <InputWithLabel {...props} />
        </form>
      </FormProvider>
    );
  },
};

export const URLInput: Story = {
  args: {
    inputType: "url",
  },
  render: (props) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form>
          <InputWithLabel {...props} />
        </form>
      </FormProvider>
    );
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Placeholder Text",
  },
  render: (props) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        <form>
          <InputWithLabel {...props} />
        </form>
      </FormProvider>
    );
  },
};
