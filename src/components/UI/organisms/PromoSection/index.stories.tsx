import { Meta, StoryObj } from "@storybook/react";
import PromoSection from ".";

const meta = {
  title: "Organisms/PromoSection",
  tags: ["autodocs"],
  args: {},
  component: PromoSection,
} as Meta<typeof PromoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
