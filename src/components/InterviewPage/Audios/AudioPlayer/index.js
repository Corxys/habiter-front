import React from 'react';

import './styles.scss';

import Mute from './Mute';
import UnMute from './UnMute';
import Pause from './Pause';
import Play from './Play';
import Stop from './Stop';
import TimeBar from './TimeBar';

import useAudioPlayer from '../../../../utils/useAudioPlayer';

const AudioPlayer = ({ id, caption, source }) => {
  const {
    currentTime,
    duration,
    muteStatus,
    playerStatus,
    setMuteStatus,
    setPlayerStatus,
    setClickedTime,
    setCurrentTime
  } = useAudioPlayer(id);

  return (
    <div className="interview-page__audio__file">
      <div className="interview-page__audio__file__name">
        { caption }
      </div>
      <div className="interview-page__audio__file__source">
        <audio id={ `audio-${id}` }>
          <source src={ source.url } />
          Your browser does not support the <code>audio</code> element.
        </audio>
        <TimeBar
          duration={ duration ? duration : '' }
          currentTime={ currentTime }
          onTimeUpdate={(time) => setClickedTime(time)} 
        />
        <div className="interview-page__audio__file__controls">          
          <div className="interview-page__audio__file__controls__buttons">
            <div className="interview-page__audio__file__controls__buttons__sound">
              {
                muteStatus ?
                <UnMute 
                  muteStatus={ muteStatus }
                  handleClick={() => setMuteStatus(false)}
                /> :
                <Mute 
                  muteStatus={ muteStatus }
                  handleClick={() => setMuteStatus(true)}
                />
              }
            </div>
            {
              playerStatus ?
              <Pause
                playerStatus={ playerStatus }
                handleClick={() => setPlayerStatus(false)}
              /> :
              <Play
                playerStatus={ playerStatus }
                handleClick={() => setPlayerStatus(true)}
              />
            }
            <div className="interview-page__audio__file__controls__separator" />
            <Stop
              handleClick={() => {
                setPlayerStatus(false);
                setCurrentTime(0);
                console.log(playerStatus);
                console.log(currentTime);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default AudioPlayer;