import { UserInfoStyled } from "./UserInfo.styled";
import { UserInfoProps } from "./UserInfo.interface";
import { IndexView } from "../../organisms/IndexView/IndexView";
import { ModalView } from "../../organisms/ModalView/ModalView";

export const UserInfo: React.FC<UserInfoProps> = ({
  indexView,
  modalView,
  ...props
}) => {
  return (
    <UserInfoStyled>
      <IndexView {...indexView}></IndexView>
      <ModalView {...modalView}></ModalView>
    </UserInfoStyled>
  );
};
