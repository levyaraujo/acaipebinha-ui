import { FunctionComponent } from "react";
import { Close } from "./close";
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface CloseButtonProps {
  closeCart: any;
}

export const CloseButton: FunctionComponent<CloseButtonProps> = ({ closeCart }) => {
  return (
    <Close onClick={closeCart}>
      <IoIosCloseCircleOutline size={30} />
    </Close>
  );
};
