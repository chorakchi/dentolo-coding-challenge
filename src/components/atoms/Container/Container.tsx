import { ContainerStyled } from "./Container.styled";
import { ContainerProps } from "./Container.interface";
export const Container: React.FC<ContainerProps> =({ ...props }: ContainerProps) => {
  return <ContainerStyled {...props} />;
};
