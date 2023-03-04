import { FunctionComponent } from "react";
import { Nav, NavIcon, ItemCounter, GradientBrand } from "./styles/styles";
import { BiShoppingBag, AiOutlineShop } from "react-icons/all";

export const NavBar: FunctionComponent = function () {
  return (
    <Nav>
      <NavIcon><GradientBrand>Açaí Pebinha</GradientBrand></NavIcon>
      <NavIcon>
        <BiShoppingBag />
        <ItemCounter>
          0
        </ItemCounter>
      </NavIcon>
    </Nav>
  );
};
