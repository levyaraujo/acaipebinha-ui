import { createContext, useState } from "react";

interface CardProps {
  children: any;
}

export const CartContext = createContext([]);
export default function CartProvider ({ children }: CardProps) {

  type Product = {
    id: string;
    name: string;
    quantity: number;
  }
  const [cartProducts, setProducts] = useState<Product[]>([])

  return (
    <CartContext.Provider value={{cartProducts, setProducts}}>
      {children}
    </CartContext.Provider>
  );
}
