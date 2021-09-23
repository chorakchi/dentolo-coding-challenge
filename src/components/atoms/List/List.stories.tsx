import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "./List";
import { mockData } from "./List.mock";

export default {
  title: "Atoms/List",
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const List_ = Template.bind({});
List_.args = {
  onSelect: (id) => {alert(id)},
  ...mockData,
};
