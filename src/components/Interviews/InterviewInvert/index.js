import React from 'react';

import './styles.scss';

const Interview = ({ id, author, location, image, randomPadding }) => {
  return (
    <div className="container__interview container__interview--invert" style={{ paddingBottom: randomPadding }}>
      <div className="container__interview__text">
        <div className="container__interview__text__title">
          { author }
        </div>
        <div className="container__interview__text__location">
          { location }
        </div>
      </div>
      <div className="container__interview__image">
        <img src={image[0].source[0].url} alt="" />
      </div>
    </div>
  );
};

export default Interview;