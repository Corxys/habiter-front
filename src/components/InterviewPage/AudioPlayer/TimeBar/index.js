import React from 'react';
import moment from 'moment';

const TimeBar = ({ duration, currentTime, onTimeUpdate }) => {
  // adapte la position du curseur lors de la lecture
  const currentPercentage = (currentTime / duration) * 100;

  // convertit en minutes la valeur de "duration"
  const formatDuration = (duration) => {
    const durationObject = moment.duration(duration, 'seconds');
    return durationObject._data.minutes + ":" + durationObject._data.seconds;
  };

  // calcule la position du curseur lorsqu'on clique sur la barre
  const calculClickedTime = (event) => {
    const clickPositionInPage = event.pageX;
    const bar = document.querySelector('.interview-page__audio__file__bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  // 
  const handleTimeDrag = (event) => {
    onTimeUpdate(calculClickedTime(event));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calculClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  };

  return (
    <div className="interview-page__audio__file__bar">
      <div 
        className="interview-page__audio__file__bar__progress"
        style={{
          background: `linear-gradient(to right, #0000FF ${currentPercentage}%, #FFFFFF75 0)`
        }}
        onMouseDown={(event) => handleTimeDrag(event)}
      >
        <span
          className="interview-page__audio__file__bar__progress__knob"
          style={{
            left: `${currentPercentage - 0.5}%`,
          }}
        >
        </span>
      </div>
      <div className="interview-page__audio__file__bar__time">
        <div className="interview-page__audio__file__bar__time__current">
          { formatDuration(currentTime) }
        </div>
        <div className="interview-page__audio__file__bar__time__end">
          { formatDuration(duration) }
        </div>
      </div>
    </div>
  )
};

export default TimeBar;