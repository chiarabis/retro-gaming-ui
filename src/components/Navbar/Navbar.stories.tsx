import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Contact", href: "/" },
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
    //backgroundColor: { control: "color", name: "Background Color" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    gridColor: "#00ffff",
    links: links,
    textColor: "#ff2e9aff",
    gap: 3,
    fontSize: 1.3,
    //backgroundColor: "#7999eb",
  },
  render: (args) => (
    <Navbar {...args} />
  ),
};
