import type { Meta, StoryObj } from "@storybook/react";
import Pacman from "./Pacman";


const meta = {
    component: Pacman,
} satisfies Meta<typeof Pacman>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // Add your story args here
    },
};




