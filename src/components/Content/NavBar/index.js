// import
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import { HashLink as Link } from 'react-router-hash-link';
import { connect } from 'react-redux';

// styles
import './styles.scss';

// components import
import SwitchLanguage from './SwitchLanguage';

// icons
import { ReactComponent as OpenCallIcon } from '../../../assets/icons/navbar-open-call.svg';
import { ReactComponent as MenuBurgerIcon } from '../../../assets/icons/habiter-menu-open.svg';
import { ReactComponent as MenuCrossIcon } from '../../../assets/icons/habiter-menu-close.svg';
import { ReactComponent as SwitchLanguageIcon } from '../../../assets/icons/navbar-langue.svg';


// component
const NavBar = ({ isOpen, setIsOpen, changeLanguage }) => {
  const [displayed, setDisplayed] = useState(false);

  const { t, i18n } = useTranslation();

  const fadeInHome = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 1800,
  });

  const fadeInLinks = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 2800,
  });

  const fadeInIcons = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 3800,
  })

  const lineHorizontal = useSpring({
    from: { opacity: 0, width: '0%' },
    to: { opacity: 1, width: '100%' },
    config: {
      duration: 1200,
    },
    delay: 0,
  });

  return (
    <header className="header">
      <animated.div className="line__horizontal" style={ lineHorizontal }></animated.div>
      <nav className="navbar">
        {/* NAVBAR => home */}
        <animated.div className="navbar__item__home" style={ fadeInHome } >
            <NavLink
              exact to="/"
              className="navbar__item__link"
              activeClassName="navbar__item__link--active"
            >
              Habiter
            </NavLink>
        </animated.div>
        {/* NAVBAR => about the project */}
        <animated.div className="navbar__items" style={ fadeInLinks }>
          <div
            className="navbar__item"
          >
            <NavLink
              exact to="/about-the-exhibition"
              className="navbar__item__link"
              activeClassName="navbar__item__link--active"
            >
              { t('navbar:about-the-project') }
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
              { t('navbar:about-the-artists') }
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
              { t('navbar:resources') }
            </NavLink>
          </div>
        </animated.div>

        {/* ICONS => switch language & open call */}
        <animated.div className="navbar__icons" style={ fadeInIcons }>
          {/* switch language */}
          <SwitchLanguage
            displayed={ displayed }
            setDisplayed={ setDisplayed }
            changeLanguage={ changeLanguage }
          />
          {/* open call */}
          <div className="navbar__icon">
            <Link
              to="/about-the-artists#contact"
            >
              <OpenCallIcon fill='red' className="navbar__icon__item" />
            </Link>
          </div>
        </animated.div>

        <animated.div className="navbar__menu-burger" style={ fadeInLinks }>
          {!isOpen &&
            <MenuBurgerIcon
              onClick={() => {
                setIsOpen(true);
              }}
            />}
          {isOpen &&
          <MenuCrossIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />}
        </animated.div>
      </nav>

      {isOpen &&
        <div className="header__menu">
          {/* NAVBAR => about the project */}
          <div className="header__menu__items">
            <div
              className="header__menu__item"
              onClick={() => {
                setIsOpen(false);
                setDisplayed(false)
              }}
            >
              <NavLink
                exact to="/about-the-exhibition"
                className="header__menu__item__link"
                activeClassName="header__menu__item__link--active"
              >
                { t('navbar:about-the-project') }
              </NavLink>
            </div>
            {/* NAVBAR => about the artists */}
            <div
              className="header__menu__item"
            >
              <NavLink
                exact to="/about-the-artists"
                className="header__menu__item__link"
                activeClassName="header__menu__item__link--active"
                onClick={() => {
                  setIsOpen(false);
                  setDisplayed(false)
                }}
              >
                { t('navbar:about-the-artists') }
              </NavLink>
            </div>
            {/* NAVBAR => resources */}
            <div
              className="header__menu__item"
            >
              <NavLink
                exact to="/resources"
                className="header__menu__item__link"
                activeClassName="header__menu__item__link--active"
                onClick={() => {
                  setIsOpen(false);
                  setDisplayed(false)
                }}
              >
                { t('navbar:resources') }
              </NavLink>
            </div>
          </div>

          {/* ICONS => switch language & open call */}
          <div className="header__menu__icons">
            {/* switch language */}
            <SwitchLanguageIcon
              onClick={() => {
                setDisplayed(!displayed)
              }}
            />
            {/* open call */}
            <div className="header__menu__icon">
              <Link
                to="/about-the-artists#contact"
              >
                <OpenCallIcon
                  className="header__menu__icon__item"
                  onClick={() => {
                    setIsOpen(false);
                    setDisplayed(false)
                  }}
                />
              </Link>
            </div>
          </div>
          {displayed &&
            <div className="header__menu__languages">
              <div
                className="header__menu__language"
                onClick={() => {
                  changeLanguage('fr');
                  i18n.changeLanguage('fr');
                  setDisplayed(false);
                }}
              >
                FR
              </div>
              <div
                className="header__menu__language"
                onClick={() => {
                  changeLanguage('en');
                  i18n.changeLanguage('en');
                  setDisplayed(false);
                }}
              >
                EN
              </div>
              <div
                className="header__menu__language"
                onClick={() => {
                  changeLanguage('de');
                  i18n.changeLanguage('de');
                  setDisplayed(false);
                }}
              >
                DE
              </div>
            </div>
          }
        </div>
      }
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => {
    localStorage.setItem('language', language);
  },
});

// export
export default connect(null, mapDispatchToProps)(NavBar);
