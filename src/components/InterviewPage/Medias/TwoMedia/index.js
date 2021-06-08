// import
import React from 'react';

// styles
import './styles.scss';

// component
const TwoMedia = ({ images, width, checkTypeOfMedia }) => {
  return (
    <div className="interview-page__media__images__two">
      <div className="interview-page__media__images__two--one">
        { checkTypeOfMedia(images.source[0], width) }
      </div>
      <div className="interview-page__media__images__two--column">
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
        { checkTypeOfMedia(images.source[1], width) }
      </div>
    </div>
  )
};

// export
export default TwoMedia;