import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

import { ReactComponent as SwitchLanguage } from '../../assets/icons/navbar-langue.svg';
import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

const NavBar = () => {
  return (
    <div className="container__navbar">
      <div className="container__navbar__list">
        <div className="container__navbar__list__item container__navbar__list__item--home">
          <NavLink
            exact to="/"
            className="container__navbar__list__item__link"
            activeClassName="container__navbar__list__item__link container__navbar__list__item__link--active"
          >
            Habiter
          </NavLink>
        </div>
        <div className="container__navbar__list__item">
          <NavLink
            exact to="/a-propos-du-projet"
            className="container__navbar__list__item__link"
            activeClassName="container__navbar__list__item__link container__navbar__list__item__link--active"
          >
            À propos du projet
          </NavLink>
        </div>
        <div className="container__navbar__list__item">
          <NavLink
            exact to="/a-propos-des-artistes"
            className="container__navbar__list__item__link"
            activeClassName="container__navbar__list__item__link container__navbar__list__item__link--active"
          >
            À propos des artistes
          </NavLink>
        </div>
        <div className="container__navbar__list__item">
          <NavLink
            exact to="/ressources"
            className="container__navbar__list__item__link"
            activeClassName="container__navbar__list__item__link container__navbar__list__item__link--active"
          >
            Ressources
          </NavLink>
        </div>
        <div className="container__navbar__list__icons">
          <div className="container__navbar__list__icon">
            <SwitchLanguage className="container__navbar__list__icon__item" />
          </div>
          <div className="container__navbar__list__icon">
            <OpenCall fill='red' className="container__navbar__list__icon__item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;