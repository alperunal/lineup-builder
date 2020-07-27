import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import imageSrc from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import StoreContext from 'store';
import Container from 'components/UI/Container/Container';
import './Header.module.scss';

const Header: React.FC = () => {
    const context = useContext(StoreContext)!;
    const { language, changeLanguage } = context;

    return (
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
                                <Link to="/">
                                    <FormattedMessage
                                        id="header.home"
                                        description="Homepage"
                                        defaultMessage="Home"
                                    />
                                </Link>
                            </li>
                            <li className="nav__list-item">
                                <Link to="/lineup">
                                    <FormattedMessage
                                        id="header.lineup"
                                        description="Lineup Builder"
                                        defaultMessage="Lineup Builder"
                                    />
                                </Link>
                            </li>
                            <li className="nav__list-item">
                                <select
                                    value={language}
                                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => changeLanguage(event.target.value)}
                                >
                                    <option value="en">EN</option>
                                    <option value="tr">TR</option>
                                </select>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Header;
