import { createContext, FunctionComponent, useContext } from "react";
import { Title } from "../styles/styles";
import { Cart as CartContainer } from "./cart";
import { CartContext } from "../../context/cart";
import { BsCart4 } from 'react-icons/bs';

interface CardProps {
  isOpen: boolean;
  products: object[];
}

export const Cart: FunctionComponent<CardProps> = function ({ isOpen }) {
  const { products } = useContext(CartContext);
  console.log(products);

  if (isOpen) {
    return (
      <CartContainer>
        <Title>Carrinho <BsCart4 /></Title>
        {JSON.stringify(products)}
      </CartContainer>
    );
  } else {
    return null;
  }
};
