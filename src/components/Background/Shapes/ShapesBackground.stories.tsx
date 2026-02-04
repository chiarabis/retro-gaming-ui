
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
    border: {
      name: "Border",
      control: "color",
      if: { arg: "variant", eq: "mascotte" }
    },
    backgroundColor: { control: "color", name: "Background Color" },
    variant: { control: "radio", options: ["stars", "mascotte"], name: "Variant" },
    showItem: {
      name: "Show Item",
      control: "boolean",
      if: { arg: "variant", eq: "mascotte" }
    },
    firstColorItem: {
      name: "First Color Item",
      control: "color",
      if: { arg: "showItem", eq: true }
    },
    secondColorItem: {
      name: "Second Color Item",
      control: "color",
      if: { arg: "showItem", eq: true }
    },
    thirdColorItem: {
      name: "Third Color Item",
      control: "color",
      if: { arg: "showItem", eq: true }
    },
  },
};

export default meta;
type Story = StoryObj<typeof ShapesBackground>;

export const Default: Story = {
  args: {
    count: 15,
    color: "#F8FF2A",
    border: "#000",
    backgroundColor: "#7999eb",
    variant: "stars",
    firstColorItem: "#fff",
    secondColorItem: "#28643a",
    thirdColorItem: "#5d9741",
    showItem: false,
  },
  render: (args) => (
    <ShapesBackground {...args} />
  ),
};

// export const Grid: Story = {
//   args: {
//     count: 15,
//     color: "#F8FF2A",
//     border: "#000",
//     backgroundColor: "#7999eb",
//     variant: "stars",
//   },
//   render: (args) => (
//     <ElementBackground {...args} />
//   ),
// };

// export const Cubes: Story = {
//   args: {
//     count: 15,
//     color: "#F8FF2A",
//     border: "#000",
//     backgroundColor: "#7999eb",
//     variant: "stars",
//   },
//   render: (args) => (
//     <ElementBackground {...args} />
//   ),
// };
