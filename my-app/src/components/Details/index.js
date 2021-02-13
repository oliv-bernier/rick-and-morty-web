import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Character from '../Character';
import Pagination from '../../containers/Pagination';

import './style.scss';

const Details = ({}) => {
    return (
        <section className="details">
            <div className="details__global">
            <img className="details__global-image" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt=""></img>
            <ul className="details__global-list">
                <li className="details__global-list-item">
                        id: 
                </li>
                <li className="details__global-list-item">
                        name
                </li>
                <li className="details__global-list-item">
                        status
                </li>
                <li className="details__global-list-item">
                        species
                </li>
                <li className="details__global-list-item">
                        gender
                </li>
                <li className="details__global-list-item">
                        origin
                </li>
                <li className="details__global-list-item">
                        location
                </li>
                <li className="details__global-list-item">
                        episode
                </li>
            </ul>
            <button className="details__global-button">x</button>
            </div>
        </section>
    );
};

export default Details;
