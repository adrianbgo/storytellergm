import { Meta, StoryObj } from "@storybook/react";
import ContactForm from ".";

const meta = {
  title: "Organisms/ContactForm",
  component: ContactForm,
  tags: ["autodocs"],
} as Meta<typeof ContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
