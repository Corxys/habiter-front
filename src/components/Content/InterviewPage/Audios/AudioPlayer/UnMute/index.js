import React from 'react';

import './styles.scss';

import { ReactComponent as IconMute } from '../../../../../../assets/icons/interview-page-mute.svg';

const UnMute = ({ handleClick }) => {
  return (
    <button
      className="interview-page__audio__file__controls__buttons__sound__unmute"
      onClick={() => {
        handleClick();
      }}
    >
      <IconMute />
    </button>
  )
};

export default UnMute;