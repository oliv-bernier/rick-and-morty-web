import React from 'react';

import './style.scss';

const Header = () => (
    <header className="header">
        <p className="header__title">The RICK and MORTY Web</p>
        <nav className="header__nav">
            <ul className="header__list">
                <a href="#"><li>Characters</li></a>
                <a href="#"><li>Episodes</li></a>
                <a href="#"><li className="last">Locations</li></a>
            </ul>
        </nav>
    </header>
);

export default Header;