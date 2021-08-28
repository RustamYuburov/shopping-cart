import React, { useState, useEffect } from 'react';
import { ContentWrapper, BookWrapper, BookInfo, ButtonsWrapper } from './style';
import { Link } from 'react-router-dom';
import Button from '../utilities/Button/Button';
import booksData from '../utilities/Data/Data';

const ShopItem = ({ itemId, numberOfItems, addBookToCart }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [book, setBook] = useState({});
  const [price, setPrice] = useState('');

  const fetchItem = async () => {
    // const bookId = match.params.id;
    // console.log(bookId);
    // const response = await fetch(
    //   `https://private-anon-93c42f7b76-bookstore.apiary-mock.com/books/9789022558027`
    // );
    // const data = await response.json();
    // // console.log(data);
    // console.log(booksData);
    // console.log(booksData[1].ISBN);
    // console.log(typeof itemId);
    const data = booksData.find((bookInfo) => +bookInfo.ISBN === +itemId);
    setBook(data);
    setPrice(data.price.displayValue);
  };

  const handleClick = () => {
    addBookToCart({ ...book, quantity: 1 });
  };

  return (
    <ContentWrapper>
      <BookWrapper>
        <img src={book.image} alt={book.title} />
        <BookInfo>
          <h1>
            Title: <span>{book.title}</span>
          </h1>
          <h1>
            Author: <span>{book.author}</span>
          </h1>
          <h1>
            <span>€{price}</span>
          </h1>
          <p>{book.summary}</p>
        </BookInfo>
      </BookWrapper>
      <ButtonsWrapper>
        <Button text={'Add to cart'} handleClick={handleClick}></Button>
        {numberOfItems ? (
          <Link to={'/checkout'}>
            <Button text={'Complete order'} handleClick={handleClick}></Button>
          </Link>
        ) : null}
        <Link to={'/shop'}>
          <Button text={'Back to Shop'} handleClick={handleClick}></Button>
        </Link>
      </ButtonsWrapper>
    </ContentWrapper>
  );
};

export default ShopItem;
