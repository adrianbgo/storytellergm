import { Meta, StoryObj } from "@storybook/react";
import Footer from ".";

const meta = {
  title: "Molecules/Footer",
  tags: ["autodocs"],
  component: Footer,
} as Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
