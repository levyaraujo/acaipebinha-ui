import { FunctionComponent, useContext } from "react";
import { Nav, NavIcon, CartIcon, ItemCounter, GradientBrand } from "./navbar";
import { BiShoppingBag } from "react-icons/all";
import { IsOpenContext } from "../../context/isOpen";

export const NavBar: FunctionComponent = function () {
  const { isOpen, setOpen } = useContext(IsOpenContext);
  function openCart() {
    setOpen(true);
  }

  return (
    <Nav>
      <NavIcon><GradientBrand><a href="https://wa.me/15550093094?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido!" target="_blank">Açaí Pebinha</a></GradientBrand></NavIcon>
      <CartIcon onClick={() => {
        openCart(); console.log(isOpen);
      }}>
        <BiShoppingBag />
        <ItemCounter>
          0
        </ItemCounter>
      </CartIcon>
    </Nav >
  );
};
