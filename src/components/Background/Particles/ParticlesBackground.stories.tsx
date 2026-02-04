
import type { Meta, StoryObj } from "@storybook/react";
import ParticlesBackground, { type ParticlesBackgroundProps } from "./ParticlesBackground";


type StoryArgs = Omit<ParticlesBackgroundProps, "colors"> & {
  color1: string;
  color2: string;
  color3: string;
  colors: string[];
  variant?: "pois" | "bubble";
  size?: number;
};


const meta: Meta<StoryArgs> = {
  title: "Components/ParticlesBackground",
  component: ParticlesBackground,
  argTypes: {
    count: { control: "number", name: "Count" },
    backgroundColor: { control: "color", name: "Background Color" },
    color1: { control: "color", name: "Particle Color 1" },
    color2: { control: "color", name: "Particle Color 2" },
    color3: { control: "color", name: "Particle Color 3" },
    colors: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;


export const Pois: Story = {
  args: {
    count: 15,
    backgroundColor: "transparent",
    color1: "#00ffff",
    color2: "#e60076",
    color3: "#F8FF2A",
    variant: "pois",
  },
};

export const Bubble: Story = {
  args: {
    count: 15,
    backgroundColor: "transparent",
    color1: "#00ffff",
    color2: "#e60076",
    color3: "#F8FF2A",
    variant: "bubble",
  },
};