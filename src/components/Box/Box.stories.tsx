
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

// const meta = {
//     component: Box,
// } satisfies Meta<typeof Box>;


// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//     args: {
//         content: "Retro gaming UI is thought for nostalgic guys who love pixel art, retro games, vintage vibes, Y2K and 8-bit aesthetics.",
//         primaryColor: "#0f172b",
//         secondaryColor: "#515969",
//     },
// }


const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    content: { control: "text", name: "Text" },
    primaryColor: { control: "color", name: "Primary Color" },
    secondaryColor: { control: "color", name: "Secondary Color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Retro gaming UI is thought for nostalgic guys who love pixel art, retro games, vintage vibes, Y2K and 8-bit aesthetics.",
    primaryColor: "#0f172b",
    secondaryColor: "#515969",
  },
  render: ({ content, ...args }) => (
    <Box {...args} content={<div>{content}</div>} />
  ),
};
