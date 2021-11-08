import React from 'react';

import './styles.scss';

const FourMedia = ({ images, checkTypeOfMedia }) => {
  return (
    <div className="interview-page__media__images__four">
      <div className="interview-page__media__images__four--line">
        <div className="interview-page__media__images__four--line--two">
          { checkTypeOfMedia(images.source[0]) }
          { checkTypeOfMedia(images.source[1]) }
        </div>
      </div>
      <div className="interview-page__media__images__four--line">
        <div className="interview-page__media__images__four--line--two">
          { checkTypeOfMedia(images.source[2]) }
          { checkTypeOfMedia(images.source[3]) }
        </div>
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
      </div>
    </div>
  )
};

export default FourMedia;
