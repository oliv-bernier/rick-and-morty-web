import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';

import './style.scss';

const Characters = ({ fetchCharacters, characters }) => {

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <section className="characters">
            <p className="characters__title">Character's list</p>
            <div className="characters__content">
            {characters.map((character) => (
                <Character key={character.id} {...character} />
            ))}
            </div>
        </section>
    );
};

Characters.propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    characters: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Characters;
