
import type { Meta, StoryObj } from "@storybook/react";
import type CharactersProps from "./Characters";
import Characters from "./Characters";

const meta: Meta<typeof CharactersProps> = {
    title: "Components/Characters",
    component: Characters,
    argTypes: {
        count: { control: "number", name: "Count"},
        showItem: {
            name: "Show Item",
            control: "boolean",
        },
        color: { control: "color", name: "Color" },
        border: { control: "color", name: "Border" },
        firstColorItem: {
            name: "First Color Item",
            control: "color",
            if: { arg: "showItem", eq: true }
        },
        secondColorItem: {
            name: "Second Color Item",
            control: "color",
            if: { arg: "showItem", eq: true }
        },
        thirdColorItem: {
            name: "Third Color Item",
            control: "color",
            if: { arg: "showItem", eq: true }
        },
        backgroundColor: { control: "color", name: "Background Color" },
    }
}

export default meta;
type Story = StoryObj<typeof CharactersProps>;

export const Ghost: Story = {
    args: {
        count: 15,
        showItem: true,
        color: "#fff",
        border: "#000",
        firstColorItem: "#fff",
        secondColorItem: "#28643a",
        thirdColorItem: "#5d9741",
        backgroundColor: "#7999eb",
    },
    render: (args) => (
        <Characters {...args} />
    ),
}