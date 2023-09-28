import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dl7AtvcsvJweDti31Li8/books';

const initialState = {
  books: [],
  isLoading: false,
};

const getBookApi = createAsyncThunk('books/getBookApi', async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

const postBooks = createAsyncThunk('books/postBooks', async ([title, author, category]) => {
  const newBook = {
    item_id: nanoid(),
    title,
    author,
    category,
  };

  const response = await axios.post(apiURL, newBook);
  return response.data;
});

const removeBookFromApi = createAsyncThunk('books/removeBookFromApi', async (bookId) => {
  const response = await axios.delete(`${apiURL}/${bookId}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBookApi.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getBookApi.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      books: action.payload,
    }));
    builder.addCase(getBookApi.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postBooks.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(removeBookFromApi.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(removeBookFromApi.fulfilled, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(removeBookFromApi.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const booksReducer = booksSlice.reducer;
export { getBookApi, postBooks, removeBookFromApi };
