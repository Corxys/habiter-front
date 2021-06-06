import React from 'react';

import './styles.scss';

const FiveMedia = ({ images }) => {
  return (
    <div className="interview-page__media--five">
      <div className="interview-page__media--five__pictures--two">
        <img src={images.source[0].url} alt="" />
        <img src={images.source[1].url} alt="" />
      </div>
      <div      className="interview-page__media--five__pictures--one">
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
        <img src={images.source[2].url} alt="" />
      </div>
      <div className="interview-page__media--five__pictures--two">
        <img src={images.source[3].url} alt="" />
        <img src={images.source[4].url} alt="" />
      </div>
    </div>
  )
};

export default FiveMedia;