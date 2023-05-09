import { motion } from "framer-motion";
import * as S from "./cart.style";
import { CartContext } from "./cart.context";
import { useContext } from "react";

export function Cart() {
  const { cartItems } = useContext(CartContext);

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
      <S.Title>{JSON.stringify(cartItems)}</S.Title>
    </motion.div>
  );
}
