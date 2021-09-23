import { ListStyled, ListItemStyled } from "./List.styled";
import { ListProps } from "./List.interface";
export const List: React.FC<ListProps> = ({
  items = [],
  onSelect = () => {},
  withHover,
  ...props
}: ListProps) => {
  return (
    <ListStyled {...props}>
      {items.map(({ id, name, ...props }, i) => (
        <ListItemStyled
          {...props}
          withHover={withHover}
          key={`ListItem-${i}`}
          component="li"
          onClick={() => {
            onSelect !== undefined && onSelect(id || 0);
          }}
        >
          {name}
        </ListItemStyled>
      ))}
    </ListStyled>
  );
};
