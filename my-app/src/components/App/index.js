import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Characters from '../../containers/Characters';
import Episodes from '../../containers/Episodes';

import './style.scss';

const App = () => (
    <div className="app">
        <Header />
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/characters" exact>
            <Characters />
        </Route>
        <Route path="/episodes" exact>
            <Episodes />
        </Route>
        <Footer />
    </div>
);


export default App;