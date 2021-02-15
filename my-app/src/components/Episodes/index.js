import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../containers/Pagination';

import './style.scss';

const Episodes = ({ fetchEpisodes, infos }) => {

    useEffect(() => {
        fetchEpisodes();
    }, []);

    return (
        <section className="episodes">
            <div className="episodes__results">
                <p><span className="episodes__number">{infos.count}</span> episodes found</p>
            </div>
            {/* <Pagination infos={infos} PageId={PageId} /> */}
            <div className="episodes__content">
            {/* {characters.map((character) => (
                <Character key={character.id} {...character} fetchCharacter={fetchCharacter} />
            ))} */}
            </div>
            {/* <Pagination infos={infos} PageId={PageId} /> */}
        </section>
    );
};

Episodes.propTypes = {
    fetchEpisodes: PropTypes.func.isRequired,
    // episodes: PropTypes.arrayOf(
    //     PropTypes.shape({
    //     id: PropTypes.number.isRequired,
    //     }),
    // ).isRequired,
    infos: PropTypes.objectOf(
        PropTypes.shape({
            count: PropTypes.number.isRequired,
        })
    ).isRequired,
    // PageId: PropTypes.number.isRequired,
};

export default Episodes;
