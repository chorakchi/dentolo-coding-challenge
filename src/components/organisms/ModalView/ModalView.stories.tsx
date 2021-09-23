import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../../atoms";
import { ModalView } from "./ModalView";
import {mockData} from './ModalView.mock'

export default {
  title: "Organisms/ModalView",
  component: ModalView,
} as ComponentMeta<typeof ModalView>;

const Template: ComponentStory<typeof ModalView> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}> Open Modal</Button>
      <ModalView
        {...args}
        isOpen={isOpen}
        onClickClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const ModalView_ = Template.bind({});
ModalView_.args = mockData
