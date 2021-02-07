import React from 'react';

import './style.scss';

import logo from '../../logo.svg';

const Home = () => (
    <div className="home">
        <div className="home__box">
            <p>Welcome to The RICK and MORTY Web, a project I made for training in the use of React.</p>
            <img className="home__react" src={logo} alt="Logo de React"/>
                <p>Please naviguate by yourself onto the site using the top menu.</p>
        </div>
    </div>
);

export default Home;