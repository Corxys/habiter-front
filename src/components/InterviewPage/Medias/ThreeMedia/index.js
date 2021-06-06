// import
import React from 'react';

// styles
import './styles.scss';

// component
const TwoMedia = ({ miniature, images }) => {
  console.log('images :', images);  
  console.log('miniature', miniature);

  images.source.map((image) => {
    console.log(image)
    if (miniature === image.id) {
      console.log('conflit miniature et image');
    } 
  })
  

  return (
    <div className="interview-page__media interview-page__media--three">
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
        <img 
          className="interview-page__media__image"
          src={images.source[2].url}
          alt=""
        />
      </div>
      
      
      {/* {
        images.source.map((image, index) => {
          console.log(image[index]);
          if (images.source[0].id === image.id) {
            return null;
          }
          else {
            return (
              <img 
                className="interview-page__media__image"
                src={image.url}
                alt=""
              />
            )
          }
        })
      } */}
     
    </div>
  )
};

// export
export default TwoMedia;