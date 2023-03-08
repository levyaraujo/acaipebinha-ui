import { Card, CardHeader, CardBody, CardFooter, Name, Description, Price, AddtoCart, SizeButton, Image } from "./styles/styles";
import { FunctionComponent, useContext} from "react";
import { BsBagPlusFill } from "react-icons/all";
import { IKContext, IKImage } from "imagekitio-react";
import { CartContext } from "../context/cart";

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
  const {products, setProducts} = useContext(CartContext);
  type Product = {
    id: string;
    name: string;
    quantity: number;
  }

  function addProductToCart(id: string) {
    const productsCopy = [...products];
    const item = productsCopy.find((product: Product) => product.id === id);

    if (!item) {
      productsCopy.push({ id: id, name: 'teste', quantity: 1 });
    } else {
      item.id += 1;
    }
    setProducts(productsCopy);
  }

  function removeProductFromCart(id: string) {
    const copyProductsCart = [...products];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setProducts(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== id
      );
      setProducts(arrayFiltered);
    }
  }


  function clearCart() {
    setProducts([]);
  }

  return (
    <CardFooter>
      <Price>
        R$ {prices[1]},00
      </Price>
      <AddtoCart onClick={() => addProductToCart(id)}>
        Adicionar <BsBagPlusFill size={15} />
      </AddtoCart>
    </CardFooter>
  );
};
