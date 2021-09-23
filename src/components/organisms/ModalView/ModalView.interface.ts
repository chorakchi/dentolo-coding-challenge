import { ListProps } from "../../atoms/List/List.interface";

export interface ModalViewProps extends ListProps{
  isOpen: boolean;
  onClickClose: () => void;
  title: string;
  data: any;
}
