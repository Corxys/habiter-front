import React from 'react';

import './styles.scss';

const Interview = ({ id, author, location, image, randomPadding }) => {
  return (
    <div className="container__interview" style={{ paddingTop: randomPadding }}>
      <div className="container__interview__image">
        <img src={image[0].source[0].url} alt="" />
      </div>
      <div className="container__interview__text">
        <div className="container__interview__text__title">
          { author }
        </div>
        <div className="container__interview__text__location">
          { location }
        </div>
      </div>
    </div>
  );
};

export default Interview;