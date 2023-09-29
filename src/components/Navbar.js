import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import '../styles/Navigation.css';

const Navbar = () => (
  <nav className="navigation">
    <h2>Bookstore CMS</h2>
    <ul className="items">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/category">Categories</NavLink></li>
    </ul>

    <div>
      <BiSolidUser className="bi text-2xl" />
    </div>
  </nav>
);

export default Navbar;
