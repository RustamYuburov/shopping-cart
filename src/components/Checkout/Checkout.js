import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ContentWrapper,
  EmptyCart,
  CartIcon,
  CartItems,
  BooksOrder,
  Book,
  Info,
  ControlButton,
  Payment,
} from './style.js';
import emptyCart from '../../assets/empty-cart.png';
import Button from '../utilities/Button/Button';

const Checkout = ({ shoppingCart, addBookToCart, removeBookFromCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalSum = shoppingCart.reduce(
      (sum, book) => sum + book.price.value * book.quantity,
      0
    );
    setTotalPrice(totalSum.toFixed(2));
  }, [shoppingCart]);

  const handleClick = () => {
    alert(
      'Thank you for purchase! We gonna ship you order as soon as possible'
    );
  };

  const handleChange = (e, item) => {
    if (e.target.value > item.quantity) {
      addBookToCart(item);
    } else {
      removeBookFromCart(item);
    }
  };

  return (
    <ContentWrapper>
      <h1>Your shopping cart</h1>
      {!shoppingCart.length ? (
        <EmptyCart>
          <h2>Your have 0 books in your cart</h2>
          <CartIcon src={emptyCart}></CartIcon>
          <Link to={'/shopping-cart//shop'}>
            <Button text={'Back to Shop'}></Button>
          </Link>
        </EmptyCart>
      ) : (
        <CartItems>
          <BooksOrder>
            {shoppingCart.map((book) => (
              <Book key={book.ISBN}>
                <img src={book.image} alt={book.title} />
                <Info>
                  <h2>{book.title}</h2>
                  <h3>€{book.price.displayValue}</h3>
                  <div>
                    <ControlButton
                      enabled={book.quantity > 1}
                      onClick={() =>
                        book.quantity > 1 && removeBookFromCart(book)
                      }
                    >
                      <span>&minus;</span>
                    </ControlButton>

                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={book.quantity}
                      onChange={(e) => handleChange(e, book)}
                    />

                    <ControlButton
                      enabled={book.quantity <= 99}
                      onClick={() => book.quantity <= 99 && addBookToCart(book)}
                    >
                      <span>&#43;</span>
                    </ControlButton>
                  </div>
                  <div>
                    <button onClick={() => removeBookFromCart(book, 'ALL')}>
                      &times; Remove book
                    </button>
                  </div>
                </Info>
              </Book>
            ))}
          </BooksOrder>
          <Payment>
            <h2>Order Summary</h2>
            <h3>Total €{totalPrice}</h3>
            <Button
              text={'Proceed to payment'}
              handleClick={handleClick}
            ></Button>
            <Link to={'/shopping-cart//shop'}>
              <Button text={'Back to Shop'}></Button>
            </Link>
          </Payment>
        </CartItems>
      )}
    </ContentWrapper>
  );
};

export default Checkout;
