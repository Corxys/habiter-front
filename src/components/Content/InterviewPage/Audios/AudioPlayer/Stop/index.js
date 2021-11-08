import React from 'react';

import './styles.scss';

import { ReactComponent as IconStop } from '../../../../../../assets/icons/interview-page-stop.svg';

const Stop = ({ handleClick }) => {
  return (
    <button
      className="interview-page__audio__file__controls__button"
      onClick={() => {
        handleClick();
      }}
    >
      <IconStop />
    </button>
  )
};

export default Stop;