import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const CharacterDetails = ({ oneCharacter, closeDetails }) => {
    const [isDisappears, setDisappears] = useState(false);

    const handleClose = () => {
        setDisappears(true);
        setTimeout(() => {
            closeDetails();
        }, 350);
    };

    return (
        <section className={classNames('details', { 'details--disappears': isDisappears })}>
            <div className={classNames('details__global', { 'details__global--disappears': isDisappears })}>
                <img className="details__global-image" src={oneCharacter.image} alt=""></img>
                <ul className="details__global-list">
                    {/* {details.map((detail) => {
                        <li>id: {detail.id}</li>
                    })} */}
                    <li className="details__global-list-item">
                            #{oneCharacter.id}
                    </li>
                    <li className="details__global-list-item">
                            name: {oneCharacter.name}
                    </li>
                    <li className="details__global-list-item">
                            status: {oneCharacter.status}
                    </li>
                    <li className="details__global-list-item">
                            species: {oneCharacter.species}
                    </li>
                    <li className="details__global-list-item">
                            gender: {oneCharacter.gender}
                    </li>
                    <li className="details__global-list-item">
                            origin: {oneCharacter.origin.name}
                    </li>
                    <li className="details__global-list-item">
                            location: {oneCharacter.location.name}
                    </li>
                    {/* <li className="details__global-list-item">
                            episode: 
                    </li> */}
                </ul>
                <button className="details__global-button" onClick={handleClose}>x</button>
            </div>
        </section>
    );
};

CharacterDetails.propTypes = {
    infos: PropTypes.objectOf(
        PropTypes.shape({
            count: PropTypes.number.isRequired,
        })
    ).isRequired,
    closeDetails: PropTypes.func.isRequired,
};

export default CharacterDetails;
