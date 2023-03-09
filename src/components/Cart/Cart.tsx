import { createContext, FunctionComponent, useContext } from "react";
import { Title } from "../styles/styles";
import { Cart as CartContainer } from "./cart";
import { CartContext } from "../../context/cart";

interface CardProps {
  isOpen: boolean;
}

export const Cart: FunctionComponent<CardProps> = function ({ isOpen }) {
  const { products } = useContext(CartContext);

  if (isOpen) {
    return (
      <CartContainer>
        <Title>Carrinho de compras</Title>
        {JSON.stringify(products)}
      </CartContainer>
    );
  } else {
    return null;
  }
};
