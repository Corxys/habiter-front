// import
import React from 'react';

// styles
import './styles.scss';

// component
const ThreeMedia = ({ images, getRandomValue, checkTypeOfMedia }) => {
  return (
    <div className="interview-page__media__images__three">
      <div className="interview-page__media__images__three--one">
        { checkTypeOfMedia(images.source[0], getRandomValue(75, 95)) }
      </div>
      <div className="interview-page__media__images__three--two">
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
        <div className="interview-page__media__images__three--two--column">
          { checkTypeOfMedia(images.source[1], getRandomValue(80, 100)) }
          { checkTypeOfMedia(images.source[2], getRandomValue(60, 70)) }
        </div>
      </div>
    </div>
  )
};

// export
export default ThreeMedia;