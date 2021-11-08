// import
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// components import
import SwitchLanguage from './SwitchLanguage';

// icons
import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

// component
const NavBar = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav className="navbar">
        {/* NAVBAR => home */}
        <div
          className="navbar__item navbar__item--home"
        >
          <NavLink
            exact to="/"
            className="navbar__item__link"
            activeClassName="navbar__item__link--active"
          >
            Habiter
          </NavLink>
        </div>
        {/* NAVBAR => about the project */}
        <div
          className="navbar__item"
        >
          <NavLink
            exact to="/about-the-project"
            className="navbar__item__link"
            activeClassName="navbar__item__link--active"
          >
            { t('navbar.about-the-project') }
          </NavLink>
        </div>
        {/* NAVBAR => about the artists */}
        <div
          className="navbar__item"
        >
          <NavLink
            exact to="/about-the-artists"
            className="navbar__item__link"
            activeClassName="navbar__item__link--active"
          >
            { t('navbar.about-the-artists') }
          </NavLink>
        </div>
        {/* NAVBAR => resources */}
        <div
          className="navbar__item"
        >
          <NavLink
            exact to="/resources"
            className="navbar__item__link"
            activeClassName="navbar__item__link--active"
          >
            { t('navbar.resources') }
          </NavLink>
        </div>

        {/* ICONS => switch language & open call */}
        <div className="navbar__icons">
          {/* switch language */}
          <SwitchLanguage />
          {/* open call */}
          <div className="navbar__icon">
            <a
              href="mailto:habiter.project@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <OpenCall fill='red' className="navbar__icon__item" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

// export
export default NavBar;