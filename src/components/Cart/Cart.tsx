import { createContext, FunctionComponent, useContext, useState } from "react";
import { Title } from "../styles/styles";
import { Cart as CartContainer } from "./cart";
import { CartContext } from "../../context/cart";

interface CardProps {
  isOpen: boolean;
}

export const Cart: FunctionComponent<CardProps> = function ({ isOpen }) {
  const products: Array<object> = useContext(CartContext);

  if (isOpen) {
    return (
      <CartContainer>
        <Title>Carrinho</Title>
        <div>
          {JSON.stringify(products)}
        </div>
      </CartContainer>
    );
  } else {
    return null;
  }
};
