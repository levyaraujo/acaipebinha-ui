import { Card, CardHeader, CardBody, CardFooter, Name, Description, Price, AddtoCart, SizeButton, Image } from "./styles/styles";
import { FunctionComponent, useState, useEffect } from "react";
import { Modal, ModalBackground } from "./Modal";
import { BsBagPlusFill } from "react-icons/all";
import axios from "axios";
import { IKContext, IKImage } from "imagekitio-react";


interface CardProps {
  name: string,
  description: string,
  sizes: number[],
  prices: number[],
  ingredients: object[],
  image: string;
}

interface HeaderProps {
  img: any;
}

interface BodyProps {
  name: string,
  description: string;
}

interface FooterProps {
  prices: number[];
}

export const CardContainer: FunctionComponent<CardProps> = function ({ name, description, sizes, prices, ingredients, image }) {
  const [isOpen, setOpenModal] = useState(false);

  function openModal() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }
  ;
  return (
    <>
      <Card onClick={() => openModal()}>
        <Header img={image} />
        <Body name={name} description={description} />
        <Footer prices={prices} />
      </Card>
      <ModalBackground isOpen={isOpen} closeModal={closeModal} />
      <Modal isOpen={isOpen} title={name} description={description} closeModal={closeModal} img={image} sizes={sizes} price={prices} />
    </>
  );
};

const Header: FunctionComponent<HeaderProps> = function ({ img }) {
  const UrlEndpoint = 'https://ik.imagekit.io/levyaraujo';
  return (
    <CardHeader>
      <IKContext urlEndpoint={UrlEndpoint}>
        <IKImage path={img}
          lqip={{ active: true }}
          loading="lazy"
          transformation={[{
            width: '242',
            height: '113',
            quality: '90'
            // cropMode: "extract"
          }]} />

      </IKContext>
    </CardHeader >
  );
};

const Body: FunctionComponent<BodyProps> = function ({ name, description }) {
  return (
    <CardBody>
      <Name>{name}</Name>
      <Description>
        {description}
      </Description>
    </CardBody>
  );
};

const Footer: FunctionComponent<FooterProps> = function ({ prices }) {
  return (
    <CardFooter>
      <Price>
        R$ {prices[1]},00
      </Price>
      <AddtoCart>
        Adicionar <BsBagPlusFill size={15} />
      </AddtoCart>
    </CardFooter>
  );
};
