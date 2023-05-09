import { styled } from "styled-components";

const CARD_WIDTH = "18rem";
const BORDER_RADIUS = "0.5rem";

export const Card = styled.div`
  box-shadow: #d9d9d9 5px 5px 10px;
  border-radius: ${BORDER_RADIUS};
  color: #212529;
  border: 1px solid #d9d9d9;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
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

export const CardBody = styled.div`
  width: ${CARD_WIDTH};
  height: 10.969rem;
  color: #212529;
  padding: 1.2rem;
`;

export const CardFooter = styled.div`
  width: ${CARD_WIDTH};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.2rem;
`;
