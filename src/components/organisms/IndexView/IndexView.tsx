import { IndexViewProps } from "./IndexView.interface";
import { Results, Search } from "../../molecules";
import { Container } from "../../atoms";
export const IndexView: React.FC<IndexViewProps> = ({
  search,
  result,
  onSelectItem =()=>{},
  onChangeSearch=()=>{},
  ...props
}: IndexViewProps) => {
  return (
    <Container shadow="01dp" gutter {...props}>
      <Search {...search} onChangeSearch={onChangeSearch}></Search>
      <Results {...result} onSelect={onSelectItem}></Results>
    </Container>
  );
};
