import React from 'react';
import imageSrc from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import Container from '../UI/Container/Container';
import './Header.module.scss';

const Header: React.FC = () => (
    <header className="header">
        <Container>
            <div className="header__content">
                <div>
                    <Link to="/">
                        <img className="header__logo" src={imageSrc} alt="Voety" />
                    </Link>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav__list-item">
                            <Link to="/tactic">Tactic Builder</Link>
                        </li>
                        {/* <li className="nav__list-item">
                            <Link to="teams">Teams</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </Container>
    </header>
);

export default Header;
