import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, handleChange, name }) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange}></input>
      <button>Go!</button>
    </form>
  );
  
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Form;
