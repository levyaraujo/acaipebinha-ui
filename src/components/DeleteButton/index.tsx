import { Button } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartContext, CartItem } from "../Cart/cart.context";
import { FunctionComponent, useContext } from "react";

interface DeleteButtonProps {
  item: CartItem;
}

export const DeleteButton: FunctionComponent<DeleteButtonProps> = ({
  item,
}) => {
  const { removeItemFromCart } = useContext(CartContext);
  return (
    <Button
      variant="contained"
      color="error"
      size="medium"
      startIcon={<DeleteForeverIcon />}
      onClick={() => {
        removeItemFromCart(item);
      }}
    >
      Remover
    </Button>
  );
};
