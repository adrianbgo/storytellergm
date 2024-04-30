import { Meta, StoryObj } from "@storybook/react";
import Script from ".";

const meta = {
  title: "Atoms/Script",
  component: Script,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Script>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Default</>,
  },
};

export const H1: Story = {
  args: {
    size: "h1",
    children: <>Heading 1</>,
  },
};

export const H2: Story = {
  args: {
    size: "h2",
    children: <>Heading 2</>,
  },
};

export const H3: Story = {
  args: {
    size: "h3",
    children: <>Heading 3</>,
  },
};

export const H4: Story = {
  args: {
    size: "h4",
    children: <>Heading 4</>,
  },
};
5;
export const H5: Story = {
  args: {
    size: "h5",
    children: <>Heading 5</>,
  },
};

export const H6: Story = {
  args: {
    size: "h6",
    children: <>Heading 6</>,
  },
};

export const P: Story = {
  args: {
    size: "p",
    children: <>Paragraph</>,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: <>Small</>,
  },
};

export const XS: Story = {
  args: {
    size: "xs",
    children: <>XS</>,
  },
};
