import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ photo, name, handleClick }) => {
  return (
    <div>
      <img src={photo}></img>
      <p>{name}</p>
      <button onClick={handleClick}>Get a New Character</button>
    </div>
  );
};

Character.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

export default Character;
