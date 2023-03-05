import { Card, CardHeader, CardBody, CardFooter, Name, Description, Price, AddtoCart, SizeButton, Image } from "./styles/styles";
import { FunctionComponent, useState, useEffect } from "react";
import { Modal, ModalBackground } from "./Modal";
import { BsBagPlusFill } from "react-icons/all";
import axios from "axios";


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

interface AdditionalProps {
  sizes: number[],
  prices: number[],
}

export const CardContainer: FunctionComponent<CardProps> = function ({ name, description, sizes, prices, ingredients, image }) {
  const [isOpen, setOpenModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    axios.get(`https://pebinhaserver.tunnelto.dev/static/${image}`, { responseType: 'arraybuffer' })
      .then(response => {
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(isOpen);

  function openModal() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  console.log(imageUrl);
  return (
    <>
      <Card onClick={() => openModal()}>
        <Header img={imageUrl} />
        <Body name={name} description={description} />
        <Footer prices={prices} />
      </Card>
      <ModalBackground isOpen={isOpen} closeModal={closeModal} />
      <Modal isOpen={isOpen} title={name} description={description} closeModal={closeModal} img={imageUrl} size={sizes} price={prices} />
    </>
  );
};

const Header: FunctionComponent<HeaderProps> = function ({ img }) {
  return (
    <CardHeader>
      <Image src={img}>

      </Image>
    </CardHeader>
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
      {/* <AdditionalInfos sizes={sizes} prices={prices} /> */}
      <Price>
        R$ {prices[1]},00
      </Price>
      <AddtoCart>
        Adicionar <BsBagPlusFill size={15} />
      </AddtoCart>
    </CardFooter>
  );
};
