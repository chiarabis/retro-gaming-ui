import type { Meta, StoryObj } from "@storybook/react";
import TypingText from "./TypingText";
// import userEvent from "@testing-library/user-event";
// import { within } from "@testing-library/dom";


const meta: Meta<typeof TypingText> = {
  title: "Components/Text",
  component: TypingText,
  argTypes: {
    title: { control: "text", name: "Text" },
    firstColor: { control: "color", name: "First Color" },
    // secondColor: { control: "color", name: "Second Color" },
    // thirdColor: { control: "color", name: "Third Color" },
    // backgroundColor: { control: "color", name: "Button Background Color" },
    // border: { control: { type: "select", options: ["solid", "dashed", "dotted"] }, name: "Border Type"},
  },
};

export default meta;
type Story = StoryObj<typeof TypingText>;

export const Default: Story = {
 
  args: {
    title: "► Click Me!",
    firstColor: "#0f172b",
    
  },
  render: (args) => (
    <TypingText {...args} />
  ),
  

  // play function per simulare il click
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const button = canvas.getByRole("button");
  //   await userEvent.click(button);
  //   alert("Button clicked!");
  // },
};
