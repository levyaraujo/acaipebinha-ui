import { FunctionComponent, useContext } from "react";
import * as S from "./navbar.style";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { Logo } from "./Logo";
import { CartContext } from "../Cart/cart.context";

export const Navbar: FunctionComponent = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems.length);
  return (
    <S.Navbar>
      <Logo />
      <Link to="/cart">
        <BsHandbag size={30} color="#f8f9fa" />
        <span>{cartItems.length}</span>
      </Link>
    </S.Navbar>
  );
};
