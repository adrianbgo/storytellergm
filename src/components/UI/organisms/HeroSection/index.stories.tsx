import { Meta, StoryObj } from "@storybook/react";
import HeroSection from ".";

const meta = {
  title: "Organisms/HeroSection",
  tags: ["autodocs"],
  component: HeroSection,
} as Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
