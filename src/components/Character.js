import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ photoUrl, name }) => {
  console.log(photoUrl);
  return (
    <img src={photoUrl} alt={name} />
  );
};

Character.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string
};

export default Character;
