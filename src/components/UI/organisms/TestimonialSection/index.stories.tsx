import { Meta, StoryObj } from "@storybook/react";
import TestimonialSection from ".";
import { testTestimonials } from "@/constants/testimonials";

const meta = {
  title: "Organisms/TestimonialSection",
  component: TestimonialSection,
  tags: ["autodocs"],
  args: {
    testimonials: testTestimonials,
  },
} as Meta<typeof TestimonialSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
