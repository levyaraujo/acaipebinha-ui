import { FunctionComponent, ReactNode, useState } from "react";
import { Name, Description, Price, AddtoCart } from "./styles/styles";
import { Size } from "./styles/SizeButton";
import { SizeButton } from "./SizeButton";
import * as S from "./styles/ModalStyles";
import { ValueButton, ValueInput as Quantity, Container } from "./styles/IncreaseButton";
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

interface FooterProps {
  sizes: number[];
  price: number[];
}

const Footer: FunctionComponent<FooterProps> = function ({ sizes, price }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedPrice, setPrice] = useState(price[1]);
  const [total, setTotal] = useState(price[1]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setTotal(selectedPrice * quantity);
  };

  const handleDecrease = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      setTotal(total - selectedPrice);
    };
  };

  console.log(quantity);
  console.log(total);
  console.log(selectedPrice);

  return (
    <S.ModalFooter >
      <S.Title>
        Escolha o tamanho:
      </S.Title>
      <p></p>
      <SizeButton size={sizes[0]} handlePrice={() => setPrice(price[0])} />
      <SizeButton size={sizes[1]} handlePrice={() => setPrice(price[1])} />
      <SizeButton size={sizes[2]} handlePrice={() => setPrice(price[2])} />

      <Container>
        <ValueButton onClick={() => { handleDecrease(); }}>
          <AiOutlineMinus size={10} />
        </ValueButton>
        <Quantity>
          {quantity}
        </Quantity>
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
