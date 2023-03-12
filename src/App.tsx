import './App.css';
import { Main } from './components/Main';
import CartProvider from './context/cart';

function App() {

  return (
    <CartProvider>
      <Main />
    </CartProvider>
  );
}

export default App;
