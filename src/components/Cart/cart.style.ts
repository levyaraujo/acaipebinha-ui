import { styled } from "styled-components";

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #3a3d42;
  margin-left: 0.8rem;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 50%;
  margin: 5rem auto;
  border: 1px solid #e0e0e0;
`;

export const CartItem = styled.div`
  padding: 1.2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
  border-bottom: 1px solid #e0e0e0;
`;

export const Description = styled.div`
  max-width: 15rem;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.2rem;
`;

export const HeaderTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  color: #3a3d42;
  margin: 0;
`;

export const Price = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: #50a773;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15rem;
  padding: 1.2rem;
  align-self: flex-end;
  margin: 2rem 0;
  border: 1px solid #e0e0e0;
`;

export const Total = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
`;
