import { SearchStyled } from "./Search.styled";
import { SearchProps } from "./Search.interface";
import { Typography } from "../..";
import { TextField } from "../../atoms/TextField/TextField";
export const Search: React.FC<SearchProps> = ({
  title,
  placeholder,
  onChangeSearch = () => {},
  ...props
}: SearchProps) => {
  return (
    <SearchStyled {...props}>
      <Typography variant="headline_s">{title}</Typography>
      <TextField
        placeholder={placeholder}
        onChange={(e) => {
          onChangeSearch(e.target.value);
        }}
      />
    </SearchStyled>
  );
};
