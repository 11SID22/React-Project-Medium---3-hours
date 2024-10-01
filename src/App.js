import React, {useState} from "react";

import ShoesApp from "./components/Shoes/ShoesApp";
import CartButton from './components/Layouts/CartButton';
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider'

function App() {
const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () =>{ 
  setCartIsShown(true);
};

const hideCartHandler = () => {
  setCartIsShown(false);
};

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <ShoesApp/>
      <CartButton onShowCart={showCartHandler}/>     
    </CartProvider>
  );
}

export default App;
