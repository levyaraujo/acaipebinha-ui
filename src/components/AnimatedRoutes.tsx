import { Route, Routes, useLocation } from "react-router-dom";
import { Products } from "./Products/Products";
import { Cart } from "./Cart/Cart";

export function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
