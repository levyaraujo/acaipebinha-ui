import { FunctionComponent } from "react";
import { BackgroundContainer } from "./background";

interface BackgroundProps {
  closeBackground: any;
  isOpen: boolean;
}

export const Background: FunctionComponent<BackgroundProps> = function ({ closeBackground, isOpen }) {
  if (isOpen) {
    return (
      <BackgroundContainer onClick={closeBackground}>
      </BackgroundContainer>
    );
  }
  return null;
};
