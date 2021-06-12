// import
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';

// styles
import './styles.scss';

// components import
import SwitchLanguage from './SwitchLanguage';

// icons
import { ReactComponent as OpenCall } from '../../../assets/icons/navbar-open-call.svg';

// component
const NavBar = () => {
  const { t } = useTranslation();

  const fadeInHome = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 1200,
  });

  const fadeInLinks = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 1800,
  });

  const fadeInIcons = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 2400,
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
              exact to="/about-the-project"
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
        </animated.div>
      </nav>
    </header>
  );
};

// export
export default NavBar;