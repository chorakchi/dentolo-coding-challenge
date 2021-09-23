import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Search } from "./Search";

export default {
  title: "Molecules/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

export const Search_ = Template.bind({});
Search_.args = {placeholder:'Search by name', title:"Search"
};
