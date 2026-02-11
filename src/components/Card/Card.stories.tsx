import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const pokemon = 
  {
    id: 1, 
    name: "Ghostino", 
    sprites: {front_default: "./public/laibdwee.png"}, 
    types: [{type: {name: "psychic"}}, {type: {name: "ghost"}}], 
    evolutions: [{name: "Ghostone", image: "./public/vqhfoeq.png"}], 
    abilities: [{ability: {name: "levitating"}}, {ability: {name: "invisible"}}],
  };

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    pokemon: { table: { disable: true } },
    selectedGender: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    pokemon,
    selectedGender: "male",
  },
  render: (args) => (
    <Card {...args} />
  ),

};
