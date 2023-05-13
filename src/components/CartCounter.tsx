import { styled } from "styled-components";
import { FunctionComponent, useContext } from "react";
import { CartContext } from "./Cart/cart.context";

export const Counter = styled.span`
  color: #000;
  font-size: 0.8rem;
  font-weight: 700;
  position: absolute;
  background-color: white;
  width: 1rem;
  max-height: 1rem;
  font-family: "Poppins", sans-serif;
  top: 43px;
  border-radius: 50%;
  text-align: center;
  margin-left: 18px;
`;

export const CartCounter: FunctionComponent = () => {
  const { cartItems } = useContext(CartContext);
  return <Counter>{cartItems.length}</Counter>;
};
