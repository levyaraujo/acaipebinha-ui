import { FunctionComponent, useState } from "react";
import { Name, Description, Price, AddtoCart } from "./styles/styles";
import { SizeButton } from "./SizeButton";
import * as S from "./styles/ModalStyles";
import { AiFillCloseSquare } from "react-icons/all";

interface ModalProps {
  isOpen: boolean;
  closeModal: any;
  title: string;
  description: string;
  img: any;
  size: number[];
  price: number[];
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

export const Modal: FunctionComponent<ModalProps> = function ({ isOpen, title, description, closeModal, img, size, price }) {
  if (isOpen === true) {
    return (
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalImage src={img}>
          </S.ModalImage>
        </S.ModalHeader>
        <S.ModalBody>
          <Name>
            {title}
          </Name>
          <Description>
            {description}
          </Description>
        </S.ModalBody>
        <S.ModalFooter>
          <S.Title>
            Escolha o tamanho:
          </S.Title>
          <p></p>
          <SizeButton size={size[0]} />
          <SizeButton size={size[1]} />
          <SizeButton size={size[2]} />

        </S.ModalFooter>
        <AddtoCart>
          <S.Price>
            R$ {price}, 00
          </S.Price>
        </AddtoCart>
        <S.CloseButton>
          <AiFillCloseSquare size={20} onClick={closeModal} color="#4E41D9" />
        </S.CloseButton>
      </S.ModalContainer >
    );
  } else {
    return null;
  }
};
