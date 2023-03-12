import { Card, CardHeader, CardBody, CardFooter, Name, Description, Price, AddtoCart, SizeButton, Image } from "./styles/styles";
import { FunctionComponent, memo, useCallback, useContext } from "react";
import { BsBagPlusFill } from "react-icons/all";
import { IKContext, IKImage } from "imagekitio-react";
import { CartContext } from "../context/cart";
import { Cart } from "./Cart/Cart";
import { IsOpenContext, IsOpenProvider } from "../context/isOpen";
import { Background } from "./Background/Background";

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

const Body: FunctionComponent<BodyProps> = memo(function ({ name, description }) {
  return (
    <CardBody>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </CardBody>
  );
});


const Footer: FunctionComponent<FooterProps> = function ({
  id,
  name,
  imagePath,
  prices = [],
  sizes = [],
}) {
  const { products, addProductToCart } = useContext(CartContext);
  const { isOpen, setOpen } = useContext(IsOpenContext);
  const [_, price] = prices;

  const handleClick = useCallback(() => {
    addProductToCart(id.toString(), name, prices, imagePath);
  }, [addProductToCart, id, name]);

  return (
    <>
      <CardFooter>
        <Price>R$ {price},00</Price>
        <AddtoCart onClick={handleClick}>
          Adicionar <BsBagPlusFill size={15} />
        </AddtoCart>
      </CardFooter>
      <Background isOpen={isOpen} closeBackground={() => setOpen(false)} />
      <Cart isOpen={isOpen} products={products} />
    </>
  );
};

