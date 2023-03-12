import { FunctionComponent } from "react";
import { NavBar } from "./Navbar/Navbar";
import { Products } from "./Products";
import { IsOpenProvider } from "../context/isOpen";

export const Main: FunctionComponent = function () {
  return (
    <div>
      <IsOpenProvider>
        <NavBar />
        <Products />
      </IsOpenProvider>
    </div >
  );
};
