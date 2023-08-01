import { styled } from "styled-components";

const CARD_WIDTH = "18rem";
const BORDER_RADIUS = "0.5rem";

export const Card = styled.div`
  box-shadow: #d9d9d9 5px 5px 10px;
  border-radius: ${BORDER_RADIUS};
  color: #212529;
  border: 1px solid #d9d9d9;
  text-align: left;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #3a3d42;
`;

export const CardHeader = styled.div`
  width: auto;
  color: #212529;
  border-radius: ${BORDER_RADIUS};
`;

export const CardImage = styled.img`
  width: ${CARD_WIDTH};
`;

export const Price = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  color: #3a3d42;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: #3a3d42;
    margin-right: -0.3rem;
  }
`;

export const CardBody = styled.div`
  width: ${CARD_WIDTH};
  height: 8.969rem;
  color: #212529;
  padding: 0 1.2rem;
`;

export const CardFooter = styled.div`
  width: ${CARD_WIDTH};
  display: grid;
  grid-template-areas:
    "a a"
    "c c"; /* Update the grid template areas to make "c" take up the whole width */
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
`;

