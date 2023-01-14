import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartIsShow] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShow(true);
  };
  const HideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onHideCart={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
