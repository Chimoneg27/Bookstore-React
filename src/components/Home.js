import React from 'react';
import Navbar from './Navbar';
import Form from './BookForm';
import BookActions from './BookAction';

const Home = () => (
  <div className="home-page">
    <Navbar />
    <h1>Welcome Home</h1>

    <BookActions />

    <Form />
  </div>
);

export default Home;
