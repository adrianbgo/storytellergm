import { Meta, StoryObj } from "@storybook/react";
import TwoColumn from ".";

const meta = {
  title: "Templates/TwoColumn",
  tags: ["autodocs"],
  component: TwoColumn,
  args: {},
  render: () => {
    return (
      <TwoColumn>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut aliquid
          porro quibusdam saepe accusantium? Amet nisi vitae eligendi minima
          voluptatibus dolorum eveniet odio quo laboriosam. Nostrum, voluptate?
          Quia, aut. Libero.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet
          sunt, soluta fuga corporis eligendi laborum beatae maiores quibusdam
          deleniti provident. Eligendi magni nulla nisi velit quidem aperiam id
          repellat.
        </div>
      </TwoColumn>
    );
  },
} as Meta<typeof TwoColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
