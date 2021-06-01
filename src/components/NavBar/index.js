// import
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// components
import SwitchLanguage from './SwitchLanguage';

// icons
import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

// component
const NavBar = () => {
  const { t } = useTranslation();

  return (
    // NAVBAR
    <div className="navbar">
      <div className="navbar__list">
        {/* NAVBAR => home */}
        <div
          className="navbar__list__item navbar__list__item--home"
        >
          <NavLink
            exact to="/"
            className="navbar__list__item__link"
            activeClassName="navbar__list__item__link--active"
          >
            Habiter
          </NavLink>
        </div>
        {/* NAVBAR => about the project */}
        <div
          className="navbar__list__item"
        >
          <NavLink
            exact to="/about-the-project"
            className="navbar__list__item__link"
            activeClassName="navbar__list__item__link--active"
          >
            { t('navbar.about-the-project') }
          </NavLink>
        </div>
        {/* NAVBAR => about the artists */}
        <div
          className="navbar__list__item"
        >
          <NavLink
            exact to="/about-the-artists"
            className="navbar__list__item__link"
            activeClassName="navbar__list__item__link--active"
          >
            { t('navbar.about-the-artists') }
          </NavLink>
        </div>
        {/* NAVBAR => resources */}
        <div
          className="navbar__list__item"
        >
          <NavLink
            exact to="/resources"
            className="navbar__list__item__link"
            activeClassName="navbar__list__item__link--active"
          >
            { t('navbar.resources') }
          </NavLink>
        </div>

        {/* ICONS => switch language & open call */}
        <div className="navbar__list__icons">
          <SwitchLanguage />
          <a
            href="mailto:habiter.project@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="navbar__list__icon">
              <OpenCall fill='red' className="navbar__list__icon__item" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;