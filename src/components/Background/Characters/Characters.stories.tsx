
import type { Meta, StoryObj } from "@storybook/react";
import type CharactersProps from "./Characters";
import Characters from "./Characters";

const meta: Meta<typeof CharactersProps> = {
    title: "Components/Characters",
    component: Characters,
    argTypes: {
        count: { control: "number", name: "Count"},
        variant: {
            name: "Variant",
            control: "radio",
            options: ["ghost", "kawaii", "onion"],
        },
        showItem: {
            name: "Show Item",
            control: "boolean",
        },
        itemVariant: {
            name: "Item Variant",
            control: "radio",
            options: ["knife", "gun"],
            if: { arg: "showItem", eq: true }
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

export const Default: Story = {
    args: {
        count: 15,
        variant: "ghost",
        showItem: true,
        itemVariant: "knife",
        color: "#fff",
        border: "#000",
        firstColorItem: "#8f8f8f",
        secondColorItem: "#153e6d",
        thirdColorItem: "#5d9741",
        backgroundColor: "#7999eb",
    },
    render: (args) => (
        <Characters {...args} />
    ),
}