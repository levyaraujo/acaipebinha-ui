import { FunctionComponent } from "react";
import { NavBar } from "./Navbar/Navbar";
import { Products } from "./Products";

export const Main: FunctionComponent = function () {
  return (
    <div>
      <NavBar />
      <Products />
    </div>
  );
};
