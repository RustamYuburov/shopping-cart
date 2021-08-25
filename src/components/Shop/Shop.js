import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShopWrapper,
  ContentWrapper,
  SmallText,
  BookCard,
  ImgCover,
} from './style';
import booksData from '../Data/Data';

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      setBooks(booksData);
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  return (
    <ContentWrapper>
      <SmallText>
        So much to read, so little time.
        <br /> The Book Planet have put together a list of the 12 must-read
        books in a lifetime, which includes all time classics, new age romance
        and must read books.
        <br /> Happy Reading!
      </SmallText>
      <ShopWrapper>
        {isLoading ? (
          <h1>Loading books...</h1>
        ) : (
          books.map((book) => {
            return (
              <Link key={book.ISBN} to={`shop/${book.ISBN}`}>
                <BookCard>
                  <ImgCover src={book.image} alt={book.title} />
                  <h1>{book.title}</h1>
                  <span>By {book.author}</span>
                  <h3>Price: {book.price.displayValue} €</h3>
                </BookCard>
              </Link>
            );
          })
        )}
      </ShopWrapper>
    </ContentWrapper>
  );
};

export default Shop;
