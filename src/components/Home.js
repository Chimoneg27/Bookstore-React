import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Navbar from './Navbar';
import BookActions from './BookAction';
import Button from './Button';

const Home = () => {
  const book = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div className="home-page">
      <Navbar />
      <h1>Welcome Home</h1>
      <div className="bookshelf">
        {book.map((book) => (
          // eslint-disable-next-line camelcase
          <div className="book" key={book.item_id}>
            <h3>{ book.title }</h3>
            <p>{ book.author }</p>
            <p>{ book.category }</p>
            <Button onClick={() => dispatch(removeBook(book))} className="removeBtn" label="Remove Book" />
          </div>
        ))}
      </div>
      <BookActions />
    </div>
  );
};

export default Home;
