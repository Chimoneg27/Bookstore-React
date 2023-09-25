import { useState } from 'react';
import Button from './Button';

const BookActions = () => {
  const [bookArr, setBookArr] = useState([]);
  const [bookObj, setBookObj] = useState({
    title: '',
    category: '',
    author: '',
  });

  const addBook = () => {
    if (!bookObj.title || !bookObj.category || !bookObj.author) {
      return;
    }

    setBookArr((prevState) => [...prevState, bookObj]);

    setBookObj({
      title: '',
      category: '',
      author: '',
    });
  };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setBookObj((prevBookObj) => ({
      ...prevBookObj,
      [name]: value,
    }));
  };

  const newArray = bookArr.map((item) => (
    <div key={item} className="display-book">
      <p>
        {' '}
        {item.title}
      </p>
      <p>
        {' '}
        {item.category}
      </p>
      <p>
        {' '}
        {item.author}
      </p>
    </div>
  ));

  return (
    <div className="book-container">
      <form>
        <input type="text" placeholder="Book Title" className="book-input" name="title" value={bookObj.title} onChange={handlechange} required />
        <input type="text" placeholder="Category" className="book-input" name="category" value={bookObj.category} onChange={handlechange} required />
        <input type="text" placeholder="Author" className="book-input" name="author" value={bookObj.author} onChange={handlechange} required />
        <Button onClick={addBook} />
      </form>
      {newArray}
    </div>
  );
};

export default BookActions;
