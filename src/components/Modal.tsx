import { FunctionComponent, ReactNode, useState } from "react";
import { Name, Description, Price, AddtoCart } from "./styles/styles";
import { Size } from "./styles/SizeButton";
import * as S from "./styles/ModalStyles";
import { ValueButton, ValueInput, Container } from "./styles/IncreaseButton";
import { AiFillCloseSquare, AiOutlinePlus, AiOutlineMinus, BsBagPlusFill, MdLocalHospital } from "react-icons/all";
import { IKContext, IKImage } from "imagekitio-react";

interface ModalProps {
  isOpen: boolean;
  closeModal: any;
  title: string;
  description: string;
  img: any;
  sizes: number[];
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

interface FooterProps {
  sizes: number[];
  price: number[];
}

const Footer: FunctionComponent<FooterProps> = function ({ sizes, price }) {
  const [value, setValue] = useState(1);
  const selectedPrice = localStorage.getItem('price');
  const [size, setSize] = useState(sizes[1]);
  const [total, setTotal] = useState(Number(price[1] * value));

  const handleTotal = () => {
    setTotal(Number(Number(selectedPrice) * value));
  };

  const handleSize = (size: number) => {
    setSize(size);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  const handleDecrease = () => {
    if (value > 0)
      setValue(value - 1);
  };

  const handleInputChange = (event: any) => {
    setValue(parseInt(event.target.value));
  };

  console.log(total);

  return (
    <S.ModalFooter >
      <S.Title>
        Escolha o tamanho:
      </S.Title>
      <p></p>
      <Size onClick={() => { handleSize(sizes[0]); localStorage.setItem('price', `${price[0]}`); }}>
        {sizes[0]} ml
      </Size>
      <Size onClick={() => { handleSize(sizes[1]); localStorage.setItem('price', `${price[1]}`); }}>
        {sizes[1]} ml
      </Size>
      <Size onClick={() => { handleSize(sizes[2]); localStorage.setItem('price', `${price[2]}`); }}>
        {sizes[2]} ml
      </Size>

      <Container>
        <ValueButton onClick={() => { handleDecrease(); handleTotal(); }}>
          <AiOutlineMinus size={10} />
        </ValueButton>
        <ValueInput type="number" value={value} onChange={handleInputChange}>
        </ValueInput>
        <ValueButton onClick={() => { handleIncrease(); }}>
          <AiOutlinePlus size={10} />
        </ValueButton>
      </Container>

      <S.AddtoCart>
        <S.Price>
          R$ {total}, 00
        </S.Price>
        <BsBagPlusFill size={15} />
      </S.AddtoCart>
    </S.ModalFooter >
  );
};

export const Modal: FunctionComponent<ModalProps> = function ({ isOpen, title, description, closeModal, img, sizes, price }) {
  const UrlEndpoint = 'https://ik.imagekit.io/levyaraujo';
  if (isOpen === true) {
    return (
      <S.ModalContainer>
        <S.ModalHeader>
          <IKContext urlEndpoint={UrlEndpoint}>
            <IKImage path={img}
              lqip={{ active: true }}
              loading="lazy"
              width="300"
              transformation={[{
                width: '242',
                quality: '100'
              }]} />

          </IKContext>
        </S.ModalHeader>
        <S.ModalBody>
          <Name>
            {title}
          </Name>
          <Description>
            {description}
          </Description>
        </S.ModalBody>
        <Footer sizes={sizes} price={price} />
        <S.CloseButton>
          <AiFillCloseSquare size={20} onClick={closeModal} color="#fff" />
        </S.CloseButton>
      </S.ModalContainer >
    );
  } else {
    return null;
  }
};
