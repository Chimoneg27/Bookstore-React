import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const books = {
        item_id: action.payload.item_id,
        title: action.payload.title,
        action: action.payload.action,
      };
      state.books.push(books);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload.item_id);
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
