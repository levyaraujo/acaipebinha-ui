import * as S from "./products.style";
import { Card } from "../ProductCard/Card";
import { motion } from "framer-motion";

export function Products() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateX(-100%)" }}
      animate={{
        opacity: 1,
        transform: "translateX(0%)",
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0 }}
    >
      <S.Products>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Products>
    </motion.div>
  );
}
