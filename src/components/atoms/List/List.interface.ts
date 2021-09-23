import { HTMLAttributes } from "react";

export interface ListProps
  extends Omit<HTMLAttributes<HTMLElement>, "onSelect"> {
  items?: Array<{
    id?: number;
    name?: string;
    invisible?: boolean;
  }>;
  onSelect?: (id: number) => void | any;
  withHover?: boolean;
  invisible?: boolean;
}
