import { Meta, StoryObj } from "@storybook/react";
import AboutSection from ".";

const meta = {
  title: "Organisms/AboutSection",
  tags: ["autodocs"],
  component: AboutSection,
} as Meta<typeof AboutSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
