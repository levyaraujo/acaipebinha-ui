import { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { CartItem } from "./cart.context";
import { CartContext } from "./cart.context";

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4e41d9;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e5e5;
  border-radius: 0.4rem;
`;

const Input = styled.input`
  max-width: 1rem;
  height: 2rem;
  border: none;
  background-color: transparent;
  text-align: center;
  font-size: 1rem;
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

export const QuantityButton: FunctionComponent<QuantityProps> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, onChange } =
    useContext(CartContext);

  return (
    <Container>
      <Button>
        <RemoveOutlinedIcon onClick={() => decreaseQuantity(item)} />
      </Button>
      <Input type="text" disabled value={item.quantity} onChange={onChange} />
      <Button onClick={() => increaseQuantity(item)}>
        <AddOutlinedIcon />
      </Button>
    </Container>
  );
};
