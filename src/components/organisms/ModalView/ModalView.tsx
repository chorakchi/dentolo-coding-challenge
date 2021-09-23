import { ModalViewProps } from "./ModalView.interface";
import { Modal } from "../../molecules";
import { List } from "../../atoms";
import { itemFormatter } from "./ModalView.helper";

export const ModalView: React.FC<ModalViewProps> = ({
  isOpen,
  title,
  data,
  onClickClose,
  ...props
}: ModalViewProps) => {

  const items = data && [
    { name: itemFormatter("Name", data.name), id:3 },
    { name: itemFormatter("Username", data.username) },
    { name: itemFormatter("Email", data.email) },
    {
      name: itemFormatter("Website", data.website, "a", {
        href: '//'+data.website,
        target:"_blank"
      }),
    },
  ];
  return (
    <Modal isOpen={isOpen} title={title} onClickClose={onClickClose}>
      <List items={items}/>
    </Modal>
  );
};
