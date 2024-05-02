import { Meta, StoryObj } from "@storybook/react";
import TwoColumn from ".";

const meta = {
  title: "Templates/TwoColumn",
  tags: ["autodocs"],
  component: TwoColumn,
  args: {},
} as Meta<typeof TwoColumn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        return (
          <TwoColumn>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              provident placeat aliquid nam ratione tenetur, reprehenderit a?
              Nemo voluptatibus maiores libero, minima ratione sit hic vel
              dolore, debitis sint ut.
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              provident placeat aliquid nam ratione tenetur, reprehenderit a?
              Nemo voluptatibus maiores libero, minima ratione sit hic vel
              dolore, debitis sint ut.
            </div>
          </TwoColumn>
        );
    }
};
