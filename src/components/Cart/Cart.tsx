import { createContext, FunctionComponent, useContext } from "react";
import { Title } from "../styles/styles";
import { Cart as CartContainer } from "./cart";
import { cartProductsContext } from "../Card";

interface CardProps {
  isOpen: boolean;
}

export const Cart: FunctionComponent<CardProps> = function ({ isOpen }) {
  const products = useContext(cartProductsContext);

  if (isOpen) {
    return (
      <CartContainer>
        <Title>Carrinho</Title>
        {JSON.stringify(products)}
      </CartContainer>
    );
  } else {
    return null;
  }
};
