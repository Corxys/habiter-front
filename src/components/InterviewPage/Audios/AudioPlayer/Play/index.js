import React from 'react';

import { ReactComponent as IconPlay } from '../../../../../assets/icons/interview-page-play.svg';

const Play = ({ handleClick }) => { 
  return (
    <button
      className="interview-page__audio__file__controls__button"
      onClick={() => {
        handleClick();
      }}
    >
      <IconPlay />
    </button>
  )
};

export default Play;