import React from 'react';

import './styles.scss';

import { ReactComponent as IconPause } from '../../../../../assets/icons/interview-page-pause.svg';

const Pause = ({ playerStatus, handleClick }) => { 
  return (
    <button
      className="interview-page__audio__file__controls__button"
      style={ playerStatus ? { backgroundColor: '#0000FF' } : {} }
      onClick={() => {
        handleClick();
      }}
    >
      <IconPause />
    </button>
  )
};

export default Pause;