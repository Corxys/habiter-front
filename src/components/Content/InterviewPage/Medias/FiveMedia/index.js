import React from 'react';

import './styles.scss';

const FiveMedia = ({ images, checkTypeOfMedia }) => {
  return (
    <div className="interview-page__media__images__five">
      <div className="interview-page__media__images__five--two">
        { checkTypeOfMedia(images.source[0]) }
        { checkTypeOfMedia(images.source[1]) }
      </div>
      <div className="interview-page__media__images__five--one">
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
        { checkTypeOfMedia(images.source[2]) }
      </div>
      <div className="interview-page__media__images__five--two interview-page__media__images--two--bottom">
      { checkTypeOfMedia(images.source[3]) }
      { checkTypeOfMedia(images.source[4]) }
      </div>
    </div>
  )
};

export default FiveMedia;