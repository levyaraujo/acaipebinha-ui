import { createContext, useState, ReactNode } from "react";

interface IsOpenContextValue {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

export const IsOpenContext = createContext<IsOpenContextValue>({
  isOpen: false,
  setOpen: () => true,
});

export function IsOpenProvider({ children }: { children: ReactNode; }) {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen(arg: boolean) {
    setIsOpen(arg);
    return true;
  }

  return (
    <IsOpenContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
}
