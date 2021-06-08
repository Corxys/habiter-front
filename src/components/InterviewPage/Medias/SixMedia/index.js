import React from 'react';

import './styles.scss';

const SixMedia = ({ images, getRandomValue, flexDirection, checkTypeOfMedia }) => {
  return (
    <div
      className="interview-page__media__images__six"
      style={ flexDirection === 0 ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' } }
    >
      <div className="interview-page__media__images__six--column">
        <div className="interview-page__media__images__six--column--two">
          { checkTypeOfMedia(images.source[0], getRandomValue(75, 90)) }
          { checkTypeOfMedia(images.source[1], 100) }
        </div>
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
        <div className="interview-page__media__images__six--column--two">
          { checkTypeOfMedia(images.source[4], 100) }
          { checkTypeOfMedia(images.source[5], getRandomValue(80, 95)) }
        </div>
      </div>
      <div className="interview-page__media__images__six--column">
        { checkTypeOfMedia(images.source[2], getRandomValue(90, 100)) }
        { checkTypeOfMedia(images.source[3], getRandomValue(90, 100)) }
      </div>
    </div>
  )
};

export default SixMedia;