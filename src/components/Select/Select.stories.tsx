import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";



//args = props dinamiche del componente
const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    borderColor: { control: "color", name: "Border Color" },
    bgColor: { control: "color", name: "Background Color" },
    optionColor: { control: "color", name: "Option Color" },
    fontColor: { control: "color", name: "Font Color" },
    optionsList: { control: "object", name: "Options" },
    //placeholder: { control: "text", name: "Placeholder" },
    placeholder: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

//Story = come il componente è renderizzato
export const Default: Story = {
  args: {
    optionsList: ["Pokemon", "Digimon", "Power Rangers", "Simpson"],
    borderColor: "#e60076",
    bgColor: "#F8FF2A",
    optionColor: "#F8FF2A",
    fontColor: "#0f172b",
    //placeholder: "Choose Something",
  },
};
