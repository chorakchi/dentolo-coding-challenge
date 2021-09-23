import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Results } from "./Results";
import {mockData } from './Results.mock'

export default {
  title: "Molecules/Results",
  component: Results,
} as ComponentMeta<typeof Results>;

const Template: ComponentStory<typeof Results> = (args) => (
  <Results {...args} />
);

export const Results_ = Template.bind({});
Results_.args = {
  onSelect:(id)=>{alert(id)},
  ...mockData
}