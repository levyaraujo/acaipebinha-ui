import { createContext, FunctionComponent, useContext } from "react";
import { Title } from "../styles/styles";
import { Cart as CartContainer } from "./cart";
import { CartContext } from "../../context/cart";
import { BsCart4 } from 'react-icons/bs';
import { CloseButton } from "../CloseButton/CloseButton";
import { IsOpenContext } from "../../context/isOpen";

interface CardProps {
  isOpen: boolean;
  products: object[];
}

export const Cart: FunctionComponent<CardProps> = function ({ isOpen }) {
  const { products } = useContext(CartContext);
  const { setOpen } = useContext(IsOpenContext);

  function closeCart() {
    setOpen(false);
  }

  if (isOpen) {
    return (
      <CartContainer>
        <Title>Carrinho <BsCart4 /></Title>
        {products.map((product: any) => {
          return (
            <div>
              <h1>{product.name}</h1>
              <h2>{product.price}</h2>
            </div>
          );
        })
        }
        <CloseButton closeCart={closeCart} />
      </CartContainer>
    );
  } else {
    return null;
  }
};
