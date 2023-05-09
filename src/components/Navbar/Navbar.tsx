import { FunctionComponent } from "react";
import * as S from "./navbar.style";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { Logo } from "./Logo";
import { CartCounter } from "../CartCounter";

export const Navbar: FunctionComponent = () => {
  return (
    <S.Navbar>
      <Logo />
      <>
        <Link to="/cart">
          <S.CartIcon>
            <BsHandbag size={30} color="#f8f9fa" />
            <CartCounter />
          </S.CartIcon>
        </Link>
      </>
    </S.Navbar>
  );
};
