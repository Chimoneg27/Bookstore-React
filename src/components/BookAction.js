import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

const BookActions = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();

    if (!title || !author || !category) {
      return;
    }

    dispatch(addBook({ title, author, category }));
    setTitle('');
    setAuthor(' ');
    setCategory(' ');
  };

  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <Button onClick={addBookHandler} className="addBtn" label="Add Book" />
    </form>
  );
};

export default BookActions;
