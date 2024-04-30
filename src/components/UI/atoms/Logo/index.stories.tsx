import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoStory: Story = {};
