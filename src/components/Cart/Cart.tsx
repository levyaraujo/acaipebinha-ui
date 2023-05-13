import { motion } from "framer-motion";
import * as S from "./styles";
import { CartContext } from "./cart.context";
import { FunctionComponent, useContext } from "react";
import { Image } from "../Image";
import { QuantityButton } from "./QuantityButton";
import { sizes } from "../../interfaces/Sizes";
import { Divider } from "@mui/material";
import { DeleteButton } from "../DeleteButton";

export const Cart: FunctionComponent = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateX(100%)" }}
      animate={{
        opacity: 1,
        transform: "translateX(0%)",
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0 }}
      style={{ marginTop: "5rem", display: "flex", justifyContent: "center" }}
    >
      {cartItems.length > 0 ? (
        <S.Cart>
          {cartItems.map((item) => (
            <>
              <S.CartItem key={item.id}>
                <S.Description>
                  <Image
                    imagePath={item.imagePath}
                    width="120"
                    height="120"
                    borderRadius=".5rem"
                  />
                  <S.Title>{item.name}</S.Title>
                </S.Description>
                <S.Size>{sizes[item.price]} ml</S.Size>
                <QuantityButton item={item} />
                <DeleteButton item={item} />
                <S.Price>R${item.price * item.quantity},00</S.Price>
              </S.CartItem>
              <Divider />
            </>
          ))}
          <S.TotalContainer>
            <S.Total>Total</S.Total>
            <S.Total>R${total},00</S.Total>
          </S.TotalContainer>
        </S.Cart>
      ) : null}
    </motion.div>
  );
};
