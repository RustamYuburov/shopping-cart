import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Routes from './Routes';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (book) => {
    const itemIndex = shoppingCart.findIndex(
      (item) => +item.ISBN === +book.ISBN
    );
    if (itemIndex > -1) {
      const newCart = shoppingCart.slice();
      newCart[itemIndex].quantity++;
      setShoppingCart(newCart);
    } else {
      setShoppingCart([...shoppingCart, book]);
    }
  };

  const removeItemFromCart = (book, removeAll) => {
    const itemIndex = shoppingCart.findIndex(
      (item) => +item.ISBN === +book.ISBN
    );
    if (itemIndex > -1) {
      const newCart = shoppingCart.slice();
      removeAll ? newCart.splice(itemIndex, 1) : newCart[itemIndex].quantity--;
      setShoppingCart(newCart);
    } else {
      console.error(
        "Couldn't remove item from shopping cart: There's no such item in the shopping cart."
      );
    }
  };

  return (
    <BrowserRouter>
      <NavBar shoppingCart={shoppingCart.length} />
      <Routes
        shoppingCart={shoppingCart}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
