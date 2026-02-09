
import type { Meta, StoryObj } from "@storybook/react";
import ParticlesBackground, { type ParticlesBackgroundProps } from "./ParticlesBackground";


// type StoryArgs = Omit<ParticlesBackgroundProps, "colors"> & {
//   color1: string;
//   color2: string;
//   color3: string;
//   colors: string[];
//   variant?: "pois" | "bubble";
//   size?: number;
// };


const meta: Meta<ParticlesBackgroundProps> = {
  title: "Components/ParticlesBackground",
  component: ParticlesBackground,
  argTypes: {
    count: { control: "number", name: "Count" },
    backgroundColor: { control: "color", name: "Background Color" },
    color1: { control: "color", name: "Color 1" },
    color2: { control: "color", name: "Color 2" },
    color3: { control: "color", name: "Color 3" },
    colors: { table: { disable: true } },
    variant: { control: "radio", options: ["pois", "bubble"], name: "Variant" },
  },
};

export default meta;
type Story = StoryObj<ParticlesBackgroundProps>;


export const Default: Story = {
  args: {
    count: 15,
    backgroundColor: "#000",
    color1: "#00ffff",
    color2: "#e60076",
    color3: "#F8FF2A",
    variant: "pois",
  },
  render: (args) => (
    <ParticlesBackground {...args} />
  ),
}

// export const Pois: Story = {
//   args: {
//     count: 15,
//     backgroundColor: "#000",
//     color1: "#00ffff",
//     color2: "#e60076",
//     color3: "#F8FF2A",
//     variant: "pois",
//   },
// };

// export const Bubble: Story = {
//   args: {
//     count: 15,
//     backgroundColor: "#000",
//     color1: "#00ffff",
//     color2: "#e60076",
//     color3: "#F8FF2A",
//     variant: "bubble",
//   },
// };