import React from 'react';

import './styles.scss';

import { ReactComponent as SwitchLanguage } from '../../assets/icons/navbar-langue.svg';
import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

const NavBar = () => {
  return (
    <div className="container__navbar">
      <div className="container__navbar__list">
        <div className="container__navbar__list__item container__navbar__list__item--home">
          <a className="container__navbar__list__item__link" href="/">
            Habiter
          </a>
        </div>
        <div className="container__navbar__list__item">
          <a className="container__navbar__list__item__link" href="/a-propos-du-projet">
            À propos du projet
          </a>
        </div>
        <div className="container__navbar__list__item">
          <a className="container__navbar__list__item__link" href="/a-propos-des-artistes">
            À propos des artistes
          </a>
        </div>
        <div className="container__navbar__list__item">
          <a className="container__navbar__list__item__link" href="/ressources">
            Ressources
          </a>
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