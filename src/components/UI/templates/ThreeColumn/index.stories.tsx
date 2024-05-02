import { Meta, StoryObj } from "@storybook/react";
import ThreeColumn from ".";

const meta = {
  title: "Templates/ThreeColumn",
  tags: ["autodocs"],
  component: ThreeColumn,
  args: {},
} as Meta<typeof ThreeColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <ThreeColumn>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          provident placeat aliquid nam ratione tenetur, reprehenderit a? Nemo
          voluptatibus maiores libero, minima ratione sit hic vel dolore,
          debitis sint ut.
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          provident placeat aliquid nam ratione tenetur, reprehenderit a? Nemo
          voluptatibus maiores libero, minima ratione sit hic vel dolore,
          debitis sint ut.
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          provident placeat aliquid nam ratione tenetur, reprehenderit a? Nemo
          voluptatibus maiores libero, minima ratione sit hic vel dolore,
          debitis sint ut.
        </div>
      </ThreeColumn>
    );
  },
};
