import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
    </nav>
  </header>
);

export default Header;
