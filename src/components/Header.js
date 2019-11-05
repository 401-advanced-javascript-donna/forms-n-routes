import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Last Airbender</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/detail">Detail</Link>
      <Link to="/list">List</Link>
    </nav>
  </header>
);

export default Header;
