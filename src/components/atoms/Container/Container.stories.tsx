import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./Container";

export default {
  title: "Atoms/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Container_ = Template.bind({});
Container_.args = { children: "Container" };
