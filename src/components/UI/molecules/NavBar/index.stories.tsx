import { Meta, StoryObj } from "@storybook/react";
import NavBar from ".";

const meta = {
  title: "Molecules/NavBar",
  component: NavBar,
  tags: ["autodocs"],
} as Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
