import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';
import Pagination from '../../containers/Pagination';
import Details from '../Details';

import './style.scss';

const Characters = ({ fetchCharacters, characters, infos, PageId }) => {

    useEffect(() => {
        fetchCharacters();
    }, []);

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
            <Pagination infos={infos} PageId={PageId} />
            <Details />
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
        })
    ).isRequired,
    PageId: PropTypes.number.isRequired,
};

export default Characters;
