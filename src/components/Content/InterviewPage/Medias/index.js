// import
import React from 'react';

// styles
import './styles.scss';

// components import
import OneMedia from './OneMedia';
import TwoMedia from './TwoMedia';
import ThreeMedia from './ThreeMedia';
import FourMedia from './FourMedia';
import FiveMedia from './FiveMedia';
import SixMedia from './SixMedia';
import SevenMedia from './SevenMedia';

// component
const Medias = ({ medias, mediaCopyright }) => {
  const getRandomValue = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  };

  const checkTypeOfMedia = ( media, width ) => {
    if (media.provider_metadata.resource_type === 'image') {
      return (
        <div className="interview-page__media__image" style={{ maxWidth: `${width}%` }}>
          <div className="interview-page__media__image__legend">
            { mediaCopyright }
          </div>
          <img 
            src={media.url}
            alt=""
            style={{ width: '100%' }}
          />
        </div>
      )
    }
    else if (media.provider_metadata.resource_type === 'video') {
      return (
        <video controls>
          <source 
            className="interview-page__media__video"
            src={media.url}
          />
        </video>
      ) 
    }
  };

  return (
    <div className="interview-page__medias">
      {
        medias.map((media) => {
          return (
            <div className="interview-page__media">
              {
                media.source.length === 1 &&
                <OneMedia
                  image={ media }
                  width={ getRandomValue(50, 70) }
                  flexDirection={ getRandomValue(0, 1) }
                  checkTypeOfMedia= { checkTypeOfMedia }
                />
              }
              {
                media.source.length === 2 &&
                <TwoMedia 
                  images={ media }
                  width={ getRandomValue(80, 100) }
                  checkTypeOfMedia={ checkTypeOfMedia }
                />
              }
              {
                media.source.length === 3 &&
                <ThreeMedia
                  images={ media }
                  getRandomValue={ getRandomValue }
                  checkTypeOfMedia={ checkTypeOfMedia }
                /> 
              }
              {
                media.source.length === 4 &&
                <FourMedia 
                  images={ media }
                  checkTypeOfMedia={ checkTypeOfMedia }
                />
              }
              {
                media.source.length === 5 &&
                <FiveMedia 
                  images={ media }
                  checkTypeOfMedia={ checkTypeOfMedia }
                />
              }
              {
                media.source.length === 6 &&
                <SixMedia 
                  images={ media }
                  getRandomValue={ getRandomValue }
                  flexDirection={ getRandomValue(0, 1) }
                  checkTypeOfMedia={ checkTypeOfMedia }
                />
              }
              {
                media.source.length === 7 &&
                <SevenMedia 
                  images={ media }
                  checkTypeOfMedia={ checkTypeOfMedia }
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