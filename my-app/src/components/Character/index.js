import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Character = ({ name, status, species, image }) => {
  return (
    <div className="character">
      <img className="character__image" src={image} alt="Un personnage" />
      <div className="character__content">
        <p>Name :</p>
        <p>Status :</p>
        <p>Species :</p>
      </div>
    </div>
  );
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Character;
