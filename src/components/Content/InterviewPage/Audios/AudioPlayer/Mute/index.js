import React from 'react';

import { ReactComponent as IconUnMute } from '../../../../../../assets/icons/interview-page-unmute.svg';

const Mute = ({ handleClick }) => {
  return (
    <button
      className="interview-page__audio__file__controls__buttons__sound__mute"
      onClick={() => {
        handleClick();
      }}
    >
      <IconUnMute />
    </button>
  )
};

export default Mute;