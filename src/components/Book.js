import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi, getBookApi } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = async () => {
    await dispatch(removeBookFromApi(book.id));
    await dispatch(getBookApi());
  };

  return (
    <div className="book">
      <h3>{ book.title }</h3>
      <p>{ book.author }</p>
      <p>{ book.category }</p>
      <Button onClick={handleRemove} className="removeBtn" label="Remove" />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
