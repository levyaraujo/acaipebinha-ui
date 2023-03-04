import { FunctionComponent, useState } from "react";
import { Name, CardBody, Description } from "./styles/styles";
import * as S from "./styles/ModalStyles";
import { AiFillCloseSquare } from "react-icons/all";

interface ModalProps {
  isOpen: boolean;
  closeModal: any;
  title: string;
  description: string;
  img: any;
}

interface BackgroundProps {
  closeModal: any;
  isOpen: boolean;
}

export const ModalBackground: FunctionComponent<BackgroundProps> = function ({ closeModal, isOpen }) {
  if (isOpen) {
    return (
      <S.ModalBackground onClick={closeModal}>
      </S.ModalBackground>
    );
  }

  return null;

};

export const Modal: FunctionComponent<ModalProps> = function ({ isOpen, title, description, closeModal, img }) {
  if (isOpen === true) {
    return (
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalImage src={img}>
          </S.ModalImage>
        </S.ModalHeader>
        <CardBody>
          <Name>
            {title}
          </Name>
          <Description>
            {description}
          </Description>
        </CardBody>
        <S.CloseButton>
          <AiFillCloseSquare size={20} onClick={closeModal} color="#4E41D9" />
        </S.CloseButton>
      </S.ModalContainer>
    );
  } else {
    return null;
  }
};
