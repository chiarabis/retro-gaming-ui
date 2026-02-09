
import type { Meta, StoryObj } from "@storybook/react";
import type ShapesBackgroundProps from "./ShapesBackground";
import ShapesBackground from "./ShapesBackground";


const meta: Meta<typeof ShapesBackgroundProps> = {
  title: "Components/ShapesBackground",
  component: ShapesBackground,
  argTypes: {
    count: { 
      control: "number", 
      name: "Count",
    },
    color: { control: "color", name: "Color" },
    // border: {
    //   name: "Border",
    //   control: "color",
    //   if: { arg: "variant", eq: "star" }
    // },
    backgroundColor: { control: "color", name: "Background Color" },
    variant: { control: "radio", options: ["star", "heart"], name: "Variant" },
  },
};

export default meta;
type Story = StoryObj<typeof ShapesBackground>;

export const Default: Story = {
  args: {
    count: 15,
    color: "#F8FF2A",
    backgroundColor: "#7999eb",
    variant: "star",
  },
  render: (args) => (
    <ShapesBackground {...args} />
  ),
};