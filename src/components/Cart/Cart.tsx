import { motion } from "framer-motion";
import * as S from "./cart.style";
import { CartContext } from "./cart.context";
import { FunctionComponent, useContext } from "react";
import { Image } from "../Image";
import { Quantity } from "./QuantityButton";
import { sizes } from "../../interfaces/Sizes";
import { Line } from "../Line";

export const Cart: FunctionComponent = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
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
                <Quantity item={item} />
                <S.Price>R${item.price * item.quantity},00</S.Price>
              </S.CartItem>
              <Line />
            </>
          ))}
          <S.TotalContainer>
            <S.Total>Total</S.Total>
            <S.Total>R${total},00</S.Total>
          </S.TotalContainer>
        </S.Cart>
      ) : (
        <h1>Sua sacola está vazia 😔. Adicione itens</h1>
      )}
    </motion.div>
  );
};
