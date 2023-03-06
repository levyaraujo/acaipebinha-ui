import { createContext, FunctionComponent, useState } from "react";
import { Title } from "../styles/styles";
import { Cart as CartContainer } from "./cart";

interface CardProps {
  isOpen: boolean;
  products: [];
}

export const CartContext = createContext([]);

export const Cart: FunctionComponent<CardProps> = function ({ isOpen, products }) {
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
