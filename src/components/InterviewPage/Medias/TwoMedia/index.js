// import
import React from 'react';

// styles
import './styles.scss';

// component
const TwoMedia = ({ miniature, images }) => {
  return (
    <div className="interview-page__media--two">
      <div className="interview-page__media__images">
        <img 
          className="interview-page__media__image"
          src={images.source[0].url}
          alt=""
        />
      </div>
      <div className="interview-page__media__images interview-page__media__images--column">
        <div className="interview-page__media__caption">
          { images.caption }
        </div>
        <img 
          className="interview-page__media__image"
          src={images.source[1].url}
          alt=""
        />
      </div>
    </div>
  )
};

// export
export default TwoMedia;