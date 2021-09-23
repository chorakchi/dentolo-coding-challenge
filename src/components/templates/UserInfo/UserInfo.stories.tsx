import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "./UserInfo.mock";

import { UserInfo } from "./UserInfo";

export default {
  title: "templates/UserInfo",
  component: UserInfo,
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = (args) => <UserInfo {...args} />;

export const UserInfo_ = Template.bind({});
UserInfo_.args = mockData;
