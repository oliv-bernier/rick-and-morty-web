import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';
import Pagination from '../../containers/Pagination';

import './style.scss';

const Characters = ({ fetchCharacters, characters, infos, previousPage, nextPage, PageId, isZero }) => {

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

    // const pageZero = () => {
    //     // if (PageId === 1) {
    //     //     return 'lol';
    //     // }
    //     // else {
    //         return PageId;
    //     // }
    // };


    return (
        <section className="characters">
            <div className="characters__results">
                <p><span className="characters__number">{infos.count}</span> characters found</p>
            </div>
            <Pagination infos={infos} PageId={PageId} />
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
            // pages: PropTypes.number.isRequired,
        })
    ).isRequired,
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    PageId: PropTypes.number.isRequired,
    isZero: PropTypes.bool.isRequired,
};

export default Characters;
