import { FunctionComponent, useState, ChangeEvent } from "react";
import * as S from "./styles";
import {
  Box,
  TextField,
  MenuItem,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext, CartItem } from "../Cart/cart.context";
import { useContext } from "react";
import { CartProvider } from "../Cart/cart.context";

interface FooterProps {
  id: string;
  name: string;
  imagePath: string;
  sizes: number[];
}

export const Footer: FunctionComponent<FooterProps> = ({
  sizes,
  id,
  name,
  imagePath,
}) => {
  function genRandom() {
    const randomIndex = Math.floor(Math.random() * sizes.length);
    return sizes[randomIndex];
  }

  const { addItem } = useContext(CartContext);

  const [size, setSize] = useState(`${genRandom()}`);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value as string);
  };

  interface Prices {
    [key: string]: number;
  }

  const prices: Prices = {
    "300": 13,
    "500": 20,
    "700": 30,
  };

  const price: number = prices[size];
  const item: CartItem = {
    id,
    name,
    imagePath,
    price,
    quantity: 1,
  };

  function handleAddItem() {
    addItem(item);
  }

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#4e41d9",
      },
    },
  });

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <S.CardFooter>
          <Box>
            <TextField
              label="Tamanho"
              select
              value={size}
              onChange={handleChange}
              SelectProps={{ MenuProps: { disableScrollLock: true } }}
            >
              {sizes.map((size: number, index: number) => (
                <MenuItem key={index} value={size}>
                  {size.toString()}ml
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Button
            variant="contained"
            size="large"
            disableElevation
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "5px",
              width: "40%",
              height: "56px",
            }}
            onClick={() => {
              handleAddItem();
            }}
          >
            <MdAddShoppingCart size={25} />
            R${prices[size]},00
          </Button>
        </S.CardFooter>
      </ThemeProvider>
    </CartProvider>
  );
};
