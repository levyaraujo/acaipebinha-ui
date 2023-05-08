import { motion } from "framer-motion";

export function Cart() {
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
      <h1>Cart aaaaaaaaa</h1>
    </motion.div>
  );
}
