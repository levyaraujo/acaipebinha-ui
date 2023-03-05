import { FunctionComponent } from "react";
import { Nav, NavIcon, ItemCounter, GradientBrand } from "./styles/styles";
import { BiShoppingBag, AiOutlineShop } from "react-icons/all";

export const NavBar: FunctionComponent = function () {
  return (
    <Nav>
      <NavIcon><GradientBrand><a href="https://wa.me/15550093094?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido!" target="_blank">Açaí Pebinha</a></GradientBrand></NavIcon>
      <NavIcon>
        <BiShoppingBag />
        <ItemCounter>
          0
        </ItemCounter>
      </NavIcon>
    </Nav>
  );
};
