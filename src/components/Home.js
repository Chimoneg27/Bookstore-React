import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookApi } from '../redux/books/booksSlice';
import Navbar from './Navbar';
import BookActions from './BookAction';
import Book from './Book';

const Home = () => {
  const { books, isLoading } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookApi());
  }, [dispatch]);

  const bookShelf = Object.keys(books).flatMap((id) => books[id].map((book) => ({ ...book, id })));

  return (
    <div className="home-page">
      <Navbar />
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="bookshelf">
          <ul>
            {bookShelf.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ul>
          <BookActions />
        </div>
      )}
    </div>
  );
};

export default Home;
