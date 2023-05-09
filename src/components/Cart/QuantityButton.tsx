import { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { CartItem } from "./cart.context";
import { CartContext } from "./cart.context";

const Button = styled.button`
  background-color: #f8f9fa;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

interface QuantityProps {
  item: CartItem;
}

export const Quantity: FunctionComponent<QuantityProps> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, onChange } =
    useContext(CartContext);

  return (
    <Container>
      <Button>
        <RemoveOutlinedIcon onClick={() => decreaseQuantity(item)} />
      </Button>
      <Input type="number" value={item.quantity} onChange={onChange}></Input>
      <Button onClick={() => increaseQuantity(item)}>
        <AddOutlinedIcon />
      </Button>
    </Container>
  );
};
