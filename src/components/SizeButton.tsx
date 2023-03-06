import { FunctionComponent } from "react";
import { Size } from "./styles/SizeButton";

interface ButtonProps {
  size: number;
  handlePrice: any;
}

export const SizeButton: FunctionComponent<ButtonProps> = function ({ size, handlePrice }) {
  return (
    <Size onClick={handlePrice}>
      {size} ml
    </Size>
  );
};
