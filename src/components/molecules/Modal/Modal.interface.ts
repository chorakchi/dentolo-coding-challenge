import { HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  onClickClose: ()=> void;
  title: string;
}