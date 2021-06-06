import React from 'react';

import './styles.scss';

const OneMedia = ({ width, flexDirection, image }) => {
  console.log(flexDirection);
  return (
    <div className="interview-page__media">
      <div
        className="interview-page__media__images--one"
        style={
          flexDirection === 0 ?
          {
            flexDirection: 'row'
          } :
          {
            flexDirection: 'row-reverse'
          }
        }
      >
        {
          image.source[0].mime === 'image/jpeg' &&
          <img 
            className="interview-page__media__image"
            src={image.source[0].url}
            alt=""
            style={{ maxWidth: `${width}%` }}
          />
        }
        {
          image.source[0].mime === 'video/mp4' &&
          <video controls>
            <source 
              className="interview-page__media__video"
              src={image.source[0].url}
            />
          </video>
        }
        <div
          className="interview-page__media__caption"
          style={
            flexDirection === 0 ?
            {
              textAlign: 'left'
            } :
            { 
              textAlign: 'right'
            }
          }
        >
          {image.caption}
        </div>
      </div>
    </div>
  )
};

export default OneMedia;