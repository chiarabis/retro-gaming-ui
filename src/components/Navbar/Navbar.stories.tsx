import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
];

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    gridColor: { control: "color", name: "Grid Color" },
    links: { table: { disable: true } },
    textColor: { control: "color", name: "Text Color" },
    gap: { control: "number", name: "Gap" },
    fontSize: { control: "number", name: "Font Size" },
    backgroundColor: { control: "color", name: "Background Color" },
    position: { table: { disable: true } },
    justify: { control: "select", options: ["flex-start", "center", "flex-end", "space-between", "space-around"], name: "Justify Content" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    gridColor: "#654b7e",
    links: links,
    textColor: "#13214e",
    gap: 3,
    fontSize: 1.3,
    backgroundColor: "#d79fe6",
    position: "absolute",
    justify: "center",
  },
  render: (args) => (
    <Navbar {...args} />
  ),
};
