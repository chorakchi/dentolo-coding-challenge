import { TextFieldStyled } from "./TextField.styled";
import { TextFieldProps } from "./TextField.interface";
export const TextField: React.FC<TextFieldProps> = ({
  variant = "outline",
  extent = "md",
  ...props
}: TextFieldProps) => {
  return <TextFieldStyled {...props} variant={variant} extent={extent} />;
};
