import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Atoms/Button",
  args: {
    text: "Test Button",
    onClick: () => console.log("test"),
  },
  component: Button,
  tags: ["autodocs"],
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
