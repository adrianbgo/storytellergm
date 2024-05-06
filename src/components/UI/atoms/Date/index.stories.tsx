import { Meta, StoryObj } from "@storybook/react";
import Date from ".";

const meta = {
  title: "Atoms/Date",
  component: Date,
  tags: ["autodocs"],
} as Meta<typeof Date>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
