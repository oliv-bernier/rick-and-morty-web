import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../../containers/Character';
import Pagination from '../../containers/Pagination';
import CharacterDetails from '../../containers/Details';

import './style.scss';
import { restartPages } from '../../actions/pagination';

const Characters = ({ restartPages, fetchCharacters, characters, infos, PageId, fetchCharacter, isDetails, oneCharacter }) => {

    useEffect(() => {
        restartPages();
        fetchCharacters();
    }, []);

    return (
        <section className="characters">
            <div className="characters__results">
                <p><span className="characters__number">{infos.count}</span> characters found</p>
            </div>
            <Pagination infos={infos} PageId={PageId} fetch={fetchCharacters} />
            <div className="characters__content">
            {characters.map((character) => (
                <Character key={character.id} {...character} fetchCharacter={fetchCharacter} />
            ))}
            </div>
            <Pagination infos={infos} PageId={PageId} fetch={fetchCharacters} />
            {isDetails && <CharacterDetails key={oneCharacter.id} oneCharacter={oneCharacter} />}
        </section>
    );
};

Characters.propTypes = {
    restartPages: PropTypes.func.isRequired,
    fetchCharacters: PropTypes.func.isRequired,
    fetchCharacter: PropTypes.func.isRequired,
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
    isDetails: PropTypes.bool.isRequired,
    oneCharacter: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
};

export default Characters;
