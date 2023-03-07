import { Card, CardHeader, CardBody, CardFooter, Name, Description, Price, AddtoCart, SizeButton, Image } from "./styles/styles";
import { createContext, FunctionComponent, useState } from "react";
import { BsBagPlusFill } from "react-icons/all";
import { IKContext, IKImage } from "imagekitio-react";
import { Product } from "../types/Product";


interface CardProps {
  id: string;
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
  name: string;
  id: string;
  imagePath: string;
  sizes: number[];
}

export const CardContainer: FunctionComponent<CardProps> = function ({ id, name, description, sizes, prices, ingredients, image }) {
  const [isOpen, setOpenModal] = useState(false);

  function openModal() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }
  ;
  return (
    <Card>
      <Header img={image} />
      <Body name={name} description={description} />
      <Footer id={id} name={name} prices={prices} imagePath={image} sizes={sizes} />
    </Card>
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

type CartItem = {
  _id: string,
  name: string,
  imagePath: string,
  prices: number[],
  sizes: number[],
  quantity: number;
};

export const cartProductsContext = createContext<CartItem[]>([]);

const Footer: FunctionComponent<FooterProps> = function ({ id, name, imagePath, prices, sizes }) {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  function addProduct(_id: string) {
    const copyProducts = [...cartProducts];
    const item = copyProducts.find((product: CartItem) => product._id === _id);
    const product: CartItem = {
      _id,
      name,
      imagePath,
      prices,
      sizes,
      quantity: 1,
    };

    if (!item) {
      copyProducts.push(product);
    } else {
      item.quantity++;
    }
    console.log(copyProducts);
    setCartProducts(copyProducts);
  }

  return (
    <cartProductsContext.Provider value={cartProducts}>
      <CardFooter>
        <Price>
          R$ {prices[1]},00
        </Price>
        <AddtoCart onClick={() => addProduct(id)}>
          Adicionar <BsBagPlusFill size={15} />
        </AddtoCart>
      </CardFooter>
    </cartProductsContext.Provider>
  );
};
