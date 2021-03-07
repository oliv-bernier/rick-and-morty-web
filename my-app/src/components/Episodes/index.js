import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../containers/Pagination';

import './style.scss';

const Episodes = ({ restartPages, fetchEpisodes, infos, PageId, episodes }) => {
    useEffect(() => {
        restartPages();
        fetchEpisodes();
    }, []);
    
    return (
        <section className="episodes">
            <div className="results">
                <p><span className="number">{infos.count}</span> episodes found</p>
            </div>
            <Pagination infos={infos} PageId={PageId} fetch={fetchEpisodes} />
            <div className="episodes__content">
            {episodes.map((episode) => (
              <div 
                className={`episodes__content-div episodes__content-div-${episode.episode.substring(0,3)}`}
              >
                <p className="episodes__content-div-name">{episode.name}</p>
                <div className='episodes__content-div-description'>
                    <p>{episode.air_date}</p>
                    <p>{episode.episode}</p>
                </div>
              </div>
            ))}
            </div>
            <Pagination infos={infos} PageId={PageId} fetch={fetchEpisodes} />
        </section>
    );
};

Episodes.propTypes = {
    restartPages: PropTypes.func.isRequired,
    fetchEpisodes: PropTypes.func.isRequired,
    episodes: PropTypes.arrayOf(
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

export default Episodes;
