import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ search, handleSubmit, handleChange }) => {

  return (
    <form onSubmit={handleSubmit}>
      <h2>Find a Character</h2>
      <input type="text" name="search" value={search} onChange={handleChange}></input>
      <button>Form</button>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};


export default Form;
