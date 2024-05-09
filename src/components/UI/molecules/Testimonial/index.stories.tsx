import { Meta, StoryObj } from "@storybook/react";
import Testimonial from ".";

const meta = {
  title: "Molecules/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
  args: {
    quote:
      "Lorem ipsum dolor sit amet, eu pariatur duis dolor. Minim anim labore laboris. Duis adipisicing do exercitation tempor mollit aliquip veniam irure ex ipsum est reprehenderit eu excepteur mollit labore ipsum id incididunt.",
    author: "John Doe",
    title: "Web Designer",
  },
} as Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
