import { createContext, useState } from "react";
import { Cart } from "../components/Cart/Cart";

interface CartProps {
  children: any;
}

interface Product {
  id: string;
  name: string;
  quantity: number;
  prices: number[];
  imagePath: string;
}

interface CartContextType {
  products: Product[];
  addProductToCart: (id: string, name: string, prices: number[], imagePath: string) => void;
  removeProductFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  products: [],
  addProductToCart: () => { },
  removeProductFromCart: () => { },
  clearCart: () => { },
});

export default function CartProvider({ children }: CartProps) {
  const [products, setProducts] = useState<Product[]>([]);

  function addProductToCart(id: string, name: string, prices: number[], imagePath: string): void {
    const productsCopy = [...products];
    const item = productsCopy.find((product: Product) => product.id === id);

    if (!item) {
      productsCopy.push({ id: id, name: name, quantity: 1, prices: prices, imagePath: imagePath });
    } else {
      item.quantity += 1;
    }
    setProducts(productsCopy);
  }

  function removeProductFromCart(id: string): void {
    const copyProductsCart = [...products];

    const item = copyProductsCart.find((product: Product) => product.id === id);

    if (item && item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setProducts(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product: Product) => product.id !== id
      );
      setProducts(arrayFiltered);
    }
  }

  function clearCart(): void {
    setProducts([]);
  }

  const contextValue: CartContextType = {
    products,
    addProductToCart,
    removeProductFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
