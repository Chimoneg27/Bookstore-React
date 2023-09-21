import { useState } from 'react';

const BookActions = () => {
  const [bookArr, setBookArr] = useState(['Book 1', 'Book 2']);
  //   const books = ['Book 1', 'Book 2'];

  const addBook = () => {
    setBookArr(
      (prevState) => [...prevState, `Book ${bookArr.length + 1}`],
    );
  };

  const removeBook = (index) => {
    // const removed = bookArr.filter((_, i) => i !== index);
    setBookArr((prevBooks) => prevBooks.filter((_, i) => i !== index).map((_item, i) => `Book ${i + 1}`));
  };

  const newArray = bookArr.map((item, index) => (
    <div key={item} className="display-book">
      <p>
        {' '}
        {item}
      </p>

      <button type="button" onClick={() => removeBook(index)}>Remove</button>
    </div>
  ));

  return (
    <div className="book-container">
      <button type="button" onClick={addBook}>New Book</button>
      {newArray}
    </div>
  );
};

export default BookActions;
