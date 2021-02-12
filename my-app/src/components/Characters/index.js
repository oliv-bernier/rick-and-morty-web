import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';

import './style.scss';

const Characters = ({ fetchCharacters, characters, infos, previousPage, nextPage, PageId }) => {

    useEffect(() => {
        fetchCharacters();
    }, []);

    const handlePrevious = () => {
        if (PageId > 1 && PageId <= 34) {
            return previousPage();
        }
    };

    const handleNext = () => {
        if (PageId >= 1 && PageId < 34) {
            return nextPage();
        }
    };

    return (
        <section className="characters">
            <div className="characters__results">
                <p><span className="characters__number">{infos.count}</span> characters found --- <span className="characters__number">{infos.pages}</span> generated pages</p>
            </div>
            <p className="characters__legend">Click on a character to see details</p>
            <p className="characters__pagination">Page # of #</p>
            <div className="characters__buttons">
                <button className="characters__button" onClick={handlePrevious}>Left</button>
                <button className="characters__button" onClick={handleNext}>Right</button>
            </div>
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
    infos: PropTypes.objectOf(
        PropTypes.shape({
            count: PropTypes.number.isRequired,
            pages: PropTypes.number.isRequired,
        })
    ).isRequired,
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    PageId: PropTypes.number.isRequired,
};

export default Characters;
