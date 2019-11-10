import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ search, handleSubmit, handleChange }) => {

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <h2>Find a Character</h2>
      <input type="text" name="search" value={search} onChange={handleChange}></input>
      <button>Search</button>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};


export default Form;
