import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ form, handleSubmit, handleChange }) => {

  return (
    <form onSubmit={handleSubmit}>
      <h2>Find a Character</h2>
      <input type="text" name="form" value={form} onChange={handleChange}></input>
      <button>Form</button>
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};


export default Form;
