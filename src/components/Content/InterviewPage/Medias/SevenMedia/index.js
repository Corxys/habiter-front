// import
import React from 'react';

// styles
import './styles.scss';

// component
const SevenMedia = ({ images, checkTypeOfMedia }) => {
  return (
    <div className="interview-page__media__images__seven">
      <div className="interview-page__media__images__seven--three">
        { checkTypeOfMedia(images.source[0]) }
        { checkTypeOfMedia(images.source[1]) }
        { checkTypeOfMedia(images.source[2]) }
      </div>
      <div className="interview-page__media__images__seven--one">
        { checkTypeOfMedia(images.source[3]) }
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
      </div>
      <div className="interview-page__media__images__seven--two">
        { checkTypeOfMedia(images.source[4]) }
        { checkTypeOfMedia(images.source[5]) }
      </div>
      <div className="interview-page__media__images__seven--one">
        { checkTypeOfMedia(images.source[6]) }
      </div>
    </div>
  )
};

// export
export default SevenMedia;