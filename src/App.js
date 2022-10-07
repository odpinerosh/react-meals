import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

import './App.css';


function App() {

  const [toShowCart, setToShowCart] = useState(false);

  const showCartHandler = () => {

    setToShowCart(true);

  };

  const hideCartHandler = () => {

    setToShowCart(false);
  
  }

  return (
    <CartProvider>
      <div className="App">
        {toShowCart && <Cart onCloseCart = {hideCartHandler}/>}
        <Header onShowCart = {showCartHandler}/>
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
