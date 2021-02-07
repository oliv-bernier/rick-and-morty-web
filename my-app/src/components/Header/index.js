import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = () => (
    <header className="header">
        <p className="header__title">The RICK and MORTY Web</p>
        <nav className="header__nav">
            <ul className="header__list">
                <NavLink 
                    className="menu__link"
                    activeClassName="menu__link--active"
                    to="/characters"
                    exact
                >
                    <li>Characters</li>
                </NavLink>
                <a href="#"><li>Episodes</li></a>
                <a href="#"><li className="last">Locations</li></a>
            </ul>
        </nav>
    </header>
);

export default Header;