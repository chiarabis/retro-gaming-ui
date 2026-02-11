import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
// import userEvent from "@testing-library/user-event";
// import { within } from "@testing-library/dom";


const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    titleButton: { control: "text", name: "Text" },
    firstColor: { control: "color", name: "First Color" },
    secondColor: { control: "color", name: "Second Color" },
    thirdColor: { control: "color", name: "Third Color" },
    backgroundColor: { control: "color", name: "Button Background Color" },
    border: { control: { type: "select", options: ["solid", "dashed", "dotted"] }, name: "Border Type"},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
 
  args: {
    titleButton: "► Click Me!",
    firstColor: "#0f172b",
    secondColor: "#F8FF2A",
    thirdColor: "#e60076",
    backgroundColor: "#F9A8D4",
    border: "dashed" as "solid" | "dashed" | "dotted",
  },
  render: (args) => (
    <Button {...args} />
  ),
  

  // play function per simulare il click
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const button = canvas.getByRole("button");
  //   await userEvent.click(button);
  //   alert("Button clicked!");
  // },
};
