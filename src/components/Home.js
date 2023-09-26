import React from 'react';
import Navbar from './Navbar';
import BookActions from './BookAction';

const Home = () => (
  <div className="home-page">
    <Navbar />
    <h1>Welcome Home</h1>
    <BookActions />
  </div>
);

export default Home;
