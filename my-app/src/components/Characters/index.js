import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';

import './style.scss';

const Characters = ({ fetchCharacters, characters, infos }) => {

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <section className="characters">
            <div className="characters__results">
                <p><pan className="characters__number">{infos.count}</pan> characters found --- <span className="characters__number">{infos.pages}</span> generated pages</p>
            </div>
            <p className="characters__legend">Click on a character to see details</p>
            <div className="characters__content">
            {characters.map((character) => (
                <Character key={character.id} {...character} />
            ))}
            </div>
            <p className="characters__pagination">Page # of #</p>
            <div className="characters__buttons">
                <button className="characters__button">Left</button>
                <button className="characters__button">Right</button>
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
    infos: PropTypes.objectOf(
        PropTypes.shape({
            count: PropTypes.number.isRequired,
            pages: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Characters;
