import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";

const meta: Meta<typeof Loader> = {
    title: "Components/Loader",
    component: Loader,
    argTypes: {
        border: { control: "color", name: "Border Color" },
        firstColor: { control: "color", name: "First Color" },
        secondColor: { control: "color", name: "Second Color" },
        variant: {
            name: "Variant",
            control: "radio",
            options: ["dino", "pacman"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
    args: {
        border: "#000",
        firstColor: "#35978f",
        secondColor: "#df1e1e",
        variant: "dino",
    },
    render: (args) => <Loader {...args} />,
};
