import { FunctionComponent } from "react";
import { Size } from "./styles/SizeButton";

interface ButtonProps {
  size: number;
}

export const SizeButton: FunctionComponent<ButtonProps> = function ({ size }) {
  return (
    <Size>
      {size} ml
    </Size>
  );

};
