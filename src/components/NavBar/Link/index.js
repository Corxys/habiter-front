import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Link = ({ className, route, title }) => {
  return (
    <div
      className={ className }
    >
      <NavLink
        exact to={ route }
        className="navbar__list__item__link"
        activeClassName="navbar__list__item__link--active"
      >
        { title }
      </NavLink>
    </div>
  );
};

export default Link;