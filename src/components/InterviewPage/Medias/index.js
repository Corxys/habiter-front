// import
import React from 'react';

// styles
import './styles.scss';

// components import
import OneMedia from './OneMedia';
import TwoMedia from './TwoMedia';
import FiveMedia from './FiveMedia';

// component
const Medias = ({ miniature, medias }) => {
  const getRandomValue = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  };

  return (
    <div className="interview-page__medias">
      {
        medias.map((media) => {
          return (
            <div className="interview-page__media">
              {/* {
                media.source.length === 3 &&
                <TwoMedia miniature={miniature} images={media} />
              } */}
              {
                media.source.length === 1 &&
                <OneMedia
                  width={getRandomValue(50, 80)}
                  flexDirection={getRandomValue(0, 1)}
                  image={media}
                />
              }
              {
                media.source.length === 2 &&
                <TwoMedia 
                  images={media}
                />
              }
              {
                media.source.length === 5 &&
                <FiveMedia 
                  images={media}
                />
              }
            </div>
          )
        })
      }
    </div>
  )
};

// export
export default Medias;