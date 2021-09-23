import { ButtonStyled } from "./Button.styled";
import { ButtonProps } from "./Button.interface";
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size= 'md',
  ...props
}: ButtonProps) => {
  return <ButtonStyled {...props} variant={variant} size={size} />;
};
