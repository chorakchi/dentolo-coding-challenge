import { ModalStyled, ModalBackdropStyled } from "./Modal.styled";
import { ModalProps } from "./Modal.interface";
import { Button } from "../../atoms/Button/Button";
import { Typography } from "../../atoms";
import { useEffect, useState } from "react";
export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  onClickClose = () => {},
  title,
  children,
  ...props
}: ModalProps) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // Effect of isOpen prop to state of component
    setIsShow(isOpen);
  }, [isOpen]);

  //useEffect added EventListener and handled pressing ESC from closing PopUp in desktop mode
  useEffect(() => {
    window.addEventListener(
      "keydown",
      (event) => {
        if (event.code === "Escape" || event.which === 27) {
          setIsShow(false);
        }
      },
      true
    );
  }, []);

  // This useEffect handel close on Close.
  useEffect(() => {
    console.log("isShow", isShow);
    if (!isShow) {
      setTimeout(() => {
        onClickClose();
      }, 500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);
  return isOpen ? (
    <ModalBackdropStyled {...props} hidden={!isShow}>
      <ModalStyled hidden={!isShow}>
        <Typography variant="headline_s">{title}</Typography>
        {children}
        <Button
          variant="outline"
          onClick={() => {
            setIsShow(false);
          }}
        >
          Close
        </Button>
      </ModalStyled>
    </ModalBackdropStyled>
  ) : null;
};
