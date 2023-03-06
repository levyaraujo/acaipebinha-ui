import { FunctionComponent, useState } from "react";
import { Nav, NavIcon, CartIcon, ItemCounter, GradientBrand } from "./navbar";
import { BiShoppingBag } from "react-icons/all";
import { Background } from "../Background/Background";
import { Cart } from "../Cart/Cart";
import { cartProductsContext } from "../Card";

export const NavBar: FunctionComponent = function () {
  const [isOpen, setIsOpen] = useState(false);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }


  return (
    <Nav>
      <NavIcon><GradientBrand><a href="https://wa.me/15550093094?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido!" target="_blank">Açaí Pebinha</a></GradientBrand></NavIcon>
      <CartIcon onClick={() => openCart()}>
        <BiShoppingBag />
        <ItemCounter>
          0
        </ItemCounter>
      </CartIcon>
      <Background isOpen={isOpen} closeBackground={() => closeCart()} />
      <Cart isOpen={isOpen} products={cartProductsContext} />
    </Nav>
  );
};
