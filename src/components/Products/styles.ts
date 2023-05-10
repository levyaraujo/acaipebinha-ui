import { styled } from "styled-components";

export const Products = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  max-width: 70%;
  margin: 5rem auto;
  gap: 2.5rem;
  text-align: center;
  justify-content: center;

  @media (max-width: 1000px) {
    grid-template-areas: "a a";
    max-width: 90%;
  }

  @media (max-width: 700px) {
    grid-template-areas: "a";
    max-width: 80%;
  }
`;
