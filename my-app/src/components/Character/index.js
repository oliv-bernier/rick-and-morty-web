import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Character = ({ name, image, id, fetchCharacter, saveId }) => {

  const handleCharacter = () => {
      saveId(id);
      return fetchCharacter();
  };

  return (
    <div className="character" onClick={handleCharacter}>
      <img className="character__image" src={image} alt="Un personnage" />
      <div className="character__content">
        <p>{name}</p>
      </div>
    </div>
  );
};

Character.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fetchCharacter: PropTypes.func.isRequired,
    saveId: PropTypes.func.isRequired,
};

export default Character;
