/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeEvent,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

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
  increaseQuantity: (item: CartItem) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  decreaseQuantity: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
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
  increaseQuantity: (_item: CartItem) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  decreaseQuantity: (_item: CartItem) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (_event: ChangeEvent<HTMLInputElement>) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeItemFromCart: (_item: CartItem) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  updateQuantity: (_itemId: string, _newQuantity: number) => {},
});

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getCartItems());

  useEffect(() => {
    const handleStorage = () => {
      setCartItems(getCartItems());
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCartItems(getCartItems());
    }
  };

  const addItem = useCallback((item: CartItem) => {
    const products: CartItem[] = [];
    if (!products.some((product) => product.id === item.id)) {
      products.push(item);
      localStorage.setItem(item.id, JSON.stringify(item));
      window.dispatchEvent(new Event("storage"));
    }
  }, []);

  function getCartItems() {
    const products = { ...localStorage };
    const cartItems: CartItem[] = [];
    for (const key in products) {
      if (Object.prototype.hasOwnProperty.call(products, key)) {
        const product = products[key];
        cartItems.push(JSON.parse(product));
      }
    }
    return cartItems;
  }

  function increaseQuantity(item: CartItem) {
    item.quantity += 1;
    localStorage.setItem(item.id, JSON.stringify(item));
    window.dispatchEvent(new Event("storage"));
  }

  function decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      localStorage.setItem(item.id, JSON.stringify(item));
      window.dispatchEvent(new Event("storage"));
    }
  }

  function removeItemFromCart(item: CartItem) {
    localStorage.removeItem(item.id);
    window.dispatchEvent(new Event("storage"));
  }

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
    onChange,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
    updateQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
