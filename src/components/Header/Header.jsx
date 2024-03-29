import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import StoreContext from 'store';
import { Container, Switch } from 'components/UI';
import Routes from 'routes';

import HamburgerIcon from 'assets/icons/hamburger-menu.svg';
import imageSrc from 'assets/images/logo.png';

import './Header.scss';

const Header = () => {
  const context = useContext(StoreContext);
  const { language, changeLanguage, theme, changeTheme } = context;
  const [toggleMenu, setToggleMenu] = useState(false);

  const linkList = (
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link to={Routes.home.path}>
          <FormattedMessage
            id="header.home"
            description="Homepage"
            defaultMessage="Home"
          />
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to={Routes.lineup.path}>
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
          onChange={(event) => changeLanguage(event.target.value)}
        >
          <option value="en">EN</option>
          <option value="tr">TR</option>
        </select>
      </li>
      <li className="nav__list-item">
        <Switch
          id="theme-selector"
          checked={theme === 'dark'}
          size="small"
          handleChange={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </li>
    </ul>
  );

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div>
            <Link to="/">
              <img className="header__logo" src={imageSrc} alt="Voety" />
            </Link>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setToggleMenu(!toggleMenu)}
              className="hamburger-button"
            >
              <img
                src={HamburgerIcon}
                alt="Menu"
                className={cn('hamburger-menu', {
                  'hamburger-menu--dark': theme === 'dark',
                })}
              />
            </button>
            {toggleMenu ? (
              <nav className="hamburger-nav">{linkList}</nav>
            ) : null}
          </div>
          <nav className="nav">{linkList}</nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
