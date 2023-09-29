import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromApi, getBookApi } from '../redux/books/booksSlice';
import Button from './Button';
import Circle from './circle';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = async () => {
    await dispatch(removeBookFromApi(book.id));
    await dispatch(getBookApi());
  };

  return (
    <div className="book">
      <div className="left">
        <p className="category">{ book.category }</p>
        <h3 className="title">{ book.title }</h3>
        <p className="author">{ book.author }</p>

        <ul className="features">
          <li>Comments</li>
          <li><Button onClick={handleRemove} className="removeBtn" label="Remove" /></li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="middle">
        <Circle />
        <ul>
          <li>27%</li>
          <li>Completed</li>
        </ul>
      </div>
      <div className="right">
        <p>CURRENT CHAPTER</p>
        <h3>Chapter 27</h3>
        <Button className="updateBtn" label="UPDATE PROGRESS" />
      </div>
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
