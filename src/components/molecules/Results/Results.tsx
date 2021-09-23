import { ResultsStyled } from "./Results.styled";
import { ResultsProps } from "./Results.interface";
import { Typography, List } from "../../atoms";

export const Results: React.FC<ResultsProps> = ({
  title,
  onSelect,
  items = [],
  noResultsLabel,
  ...props
}: ResultsProps) => {
  return (
    <ResultsStyled {...props}>
      <Typography variant="headline_s">{title}</Typography>
      <List items={items} onSelect={onSelect} withHover={true} />
      {items.filter((item) => item.invisible).length === items.length && (
        <Typography>{noResultsLabel}</Typography>
      )}
    </ResultsStyled>
  );
};
