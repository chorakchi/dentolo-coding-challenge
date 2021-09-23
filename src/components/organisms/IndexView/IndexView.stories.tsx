import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IndexView } from "./IndexView";
import { mockData } from "./IndexView.mock";

export default {
  title: "Organisms/IndexView",
  component: IndexView,
} as ComponentMeta<typeof IndexView>;

const Template: ComponentStory<typeof IndexView> = (args) => (
  <IndexView {...args} />
);

export const IndexView_ = Template.bind({});
IndexView_.args = {
  onSelectItem: () => {},
  onChangeSearch: () => {},
  ...mockData,
};
