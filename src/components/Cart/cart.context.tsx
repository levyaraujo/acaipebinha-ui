/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addItem: (_item: CartItem) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeItem: (_itemId: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  updateQuantity: (_itemId: string, _newQuantity: number) => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());

  const addItem = (item: CartItem) => {
    let products: CartItem[] = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products") ?? "");
    }

    if (!products.some((product) => product.id === item.id)) {
      products.push(item);
      localStorage.setItem("products", JSON.stringify(products));
    }
  };

  function getCartItems(): CartItem[] {
    let products: CartItem[] = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products") ?? "");
    }
    return products;
  }

  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      throw new Error(`Item with id ${itemId} not found in cart.`);
    }
    const updatedItems = [...cartItems];
    updatedItems[itemIndex].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  const contextValue: CartContextProps = {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
