import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBookApi, postBooks } from '../redux/books/booksSlice';
import Button from './Button';
import '../styles/Form.css';

const BookActions = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = async (e) => {
    e.preventDefault();

    if (!title || !author || !category) {
      return;
    }

    await dispatch(postBooks([title, author, category]));
    setTitle('');
    setAuthor(' ');
    setCategory(' ');
    await dispatch(getBookApi());
  };

  return (
    <form className="bookForm">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <div className="input-wrapper">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="title-input"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="author-input"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="category-input"
        />
        <Button onClick={addBookHandler} className="addBtn" label="Add Book" />
      </div>
    </form>
  );
};

export default BookActions;
