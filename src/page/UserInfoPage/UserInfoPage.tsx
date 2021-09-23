import { useState } from "react";
import { useFetch } from "../../utilities/fetchApi/fetchApi";
import { UserInfo } from "./../../components/templates";

export const UserInfoPage: React.FC = ({ ...props }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const [state, data] = useFetch("https://jsonplaceholder.typicode.com/users");
  const items: Array<any> =
    state === "fetched"
      ? //   @ts-ignore
        data.slice(0, 5).map((item) => ({
          ...item,
          invisible: !item.name.toLowerCase().includes(searchValue),
        }))
      : [];
  const selected =
    selectedItem && items.filter((item) => item.id === selectedItem);
  return (
    <UserInfo
      {...props}
      indexView={{
        onSelectItem: (id: number) => setSelectedItem(id),
        onChangeSearch: (value: string) => {
          setSearchValue(value);
        },
        result: {
          items: items,
          noResultsLabel: "No Results",
        },
        search: {
          title: "Search",
          placeholder: "Search by name",
        },
      }}
      modalView={{
        isOpen: selectedItem != null,
        onClickClose: () => setSelectedItem(null),
        title: "User Details",
        data: selected && selected[0],
      }}
    />
  );
};
