import React from 'react';

import './style.scss';

import logo from '../../logo.svg';

const Home = () => (
    <div className="home">
        <div className="home__box">
            <p>Welcome to The RICK and MORTY Web, a project I made for train in the use of React and Redux.</p>
            <p>Last update - 15/02/2021 : Completely stand-alone paging component and start of the Episodes page.</p>
            <p>Update - 13/02/2021 : Pagination</p>
            <p>Update - 07/02/2021 : Characters page</p>
            <img className="home__react" src={logo} alt="Logo de React"/>
            <p>Please naviguate by yourself onto the site using the top menu.</p>
        </div>
    </div>
);

export default Home;