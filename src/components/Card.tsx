import { Card, CardHeader, CardBody, CardFooter, Name, Description, Price, AddtoCart, SizeButton, Image } from "./styles/styles";
import { FunctionComponent, useContext} from "react";
import { BsBagPlusFill } from "react-icons/all";
import { IKContext, IKImage } from "imagekitio-react";
import CartProvider, { CartContext } from "../context/cart";
import { Cart } from "./Cart/Cart";

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

const Footer: FunctionComponent<FooterProps> = function ({ id, name, imagePath, prices, sizes }) {
  const {products, addProductToCart, removeProductFromCart, clearCart} = useContext(CartContext);

  return (
      <CardFooter>
        <Price>
          R$ {prices[1]},00
        </Price>
        <AddtoCart onClick={() => addProductToCart(String(id))}>
          Adicionar <BsBagPlusFill size={15} />
        </AddtoCart>
      </CardFooter>
  );
};
