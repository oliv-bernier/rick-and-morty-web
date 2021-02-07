import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Characters from '../../containers/Characters';

import './style.scss';

const App = ({ homePage, charactersPage }) => (
    <div className="app">
        <Route path="/" exact>
            <Header />
            {homePage && (<Home />)}
            <Footer />
        </Route>
        <Route path="/characters" exact>
            <Header />
            <Characters />
            <Footer />
        </Route>
    </div>
);

App.propTypes = {
    homePage: PropTypes.bool.isRequired,
    charactersPage: PropTypes.bool.isRequired,
};
  

export default App;