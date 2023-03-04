import { FunctionComponent, useEffect } from "react";
import { ProductsContainer, Title } from "./styles/styles";
import { CardsContainer } from "./Cards";

export const Products: FunctionComponent = function () {
  return (
    <ProductsContainer>
      <Title>Diversos sabores 😍</Title>
      <CardsContainer />
    </ProductsContainer>
  );
};
