import { HTMLAttributes } from "react";

export interface SearchProps extends HTMLAttributes<HTMLElement> {
  title: string;
  placeholder: string;
  onChangeSearch?: (value: string) => void;
}
