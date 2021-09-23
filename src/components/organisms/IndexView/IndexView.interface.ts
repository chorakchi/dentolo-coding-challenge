import { HTMLAttributes } from "react";
import { ResultsProps } from "./../../molecules/Results/Results.interface";
import { SearchProps } from "./../../molecules/Search/Search.interface";

export interface IndexViewProps extends HTMLAttributes<HTMLElement> {
  search: SearchProps;
  result: ResultsProps;
  onSelectItem?: (id: number) => void;
  onChangeSearch?: (value: string) => void;

}
