import { styled } from "styled-components";

export const Products = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  max-width: 70%;
  margin: 10rem auto;
  grid-gap: 1rem;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-areas: "a";
    max-width: 90%;
  }
`;
