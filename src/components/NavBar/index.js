// import
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// components
import Link from './Link';
import SwitchLanguage from './SwitchLanguage';

// icons
import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

// component
const NavBar = () => {
  const itemMenu = [ 'home', 'about-the-project', 'about-the-artists', 'resources' ];

  const { t } = useTranslation();

  return (
    // NAVBAR
    <div className="navbar">
      <div className="navbar__list">
        {
          itemMenu.map((item) => {
            if (item === 'home') {
              return (
                <Link 
                  className={ "navbar__list__item navbar__list__item--home" }
                  route={ t(`routes.${item}`) }
                  title={ t(`navbar.${item}`) }
                />
              )
            } else {
              return (
                <Link 
                  className={ "navbar__list__item" }
                  route={ t(`routes.${item}`) }
                  title={ t(`navbar.${item}`) }
                />
              )
            }
          })
        }
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