import { Meta, StoryObj } from "@storybook/react";
import ImageWrapper from ".";

const meta = {
  title: "Templates/ImageWrapper",
  component: ImageWrapper,
  tags: ["autodocs"],
  argTypes: {
    src: {
      options: [
        "/images/dummy_100x800_ffffff_8744e5.png",
        "/images/dummy_600x400_ffffff_cccccc.png",
        "/images/dummy_800x100_000000_e59290.png",
      ],
      control: { type: "select" },
    },
  },
  args: {
    alt: "Alt Text",
    children: <h1>Test Child</h1>,
    src: "/images/dummy_600x400_ffffff_cccccc.png",
  },
} as Meta<typeof ImageWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
