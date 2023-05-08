import { Navbar } from "./Navbar/Navbar";
import "../index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatedRoutes } from "./AnimatedRoutes";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </AnimatePresence>
  );
}

export default App;
