import { Meta, StoryObj } from "@storybook/react";
import NavLink from ".";

const meta = {
  title: "Atoms/NavLink",
  component: NavLink,
  tags: ["autodocs"],
  args: {
    href: "/",
    children: <>Demo Link</>,
  },
} as Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
