import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";
import { Button } from "../../atoms/Button/Button";
import { useState } from "react";
import { Typography } from "../../atoms";

export default {
  title: "Molecules/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}> Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClickClose={() => setIsOpen(false)} />
    </>
  );
};

export const Modal_ = Template.bind({});
Modal_.args = {
  title: "UserDetails",
  children: (
    <Typography>
      <br /> Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum. <br /> <br />
    </Typography>
  ),
};
