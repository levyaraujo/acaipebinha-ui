import { Navbar } from "./Navbar/Navbar";
import "../index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./Cart/cart.context";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <CartProvider>
          <Navbar />
        </CartProvider>
        <AnimatedRoutes />
      </Router>
    </AnimatePresence>
  );
}

export default App;
