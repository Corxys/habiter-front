import { useState, useEffect } from 'react';

const useAudioPlayer = (id) => {
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [muteStatus, setMuteStatus] = useState(false);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    const audio = document.querySelector(`#audio-${id}`);

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => {
      if (playerStatus === false) {
        return;
      } else {
        setCurrentTime(audio.currentTime);
      }
    };

    
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    
    playerStatus ? audio.play() : audio.pause();
    
    muteStatus ? audio.muted = true : audio.muted = false;
    
    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    };
    
    if (currentTime === duration) {
      setPlayerStatus(false);
      setCurrentTime(0);
    };
    
    
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [id, muteStatus, playerStatus, clickedTime, currentTime, duration]);

  return {
    currentTime,
    duration,
    muteStatus,
    playerStatus,
    setMuteStatus,
    setPlayerStatus,
    setClickedTime,
    setCurrentTime
  }
};

export default useAudioPlayer;