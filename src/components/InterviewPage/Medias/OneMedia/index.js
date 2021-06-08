// import
import React from 'react';

// styles
import './styles.scss';

// component
const OneMedia = ({
  image,
  width,
  flexDirection,
  checkTypeOfMedia
}) => {
  return (
    <div
      className="interview-page__media__images__one"
      style={ flexDirection === 0 ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' } }
    >
      { checkTypeOfMedia(image.source[0], width) }
      <div
        className="interview-page__media__caption"
        style={ flexDirection === 0 ? { textAlign: 'left' } : { textAlign: 'right' } }
      >
        {image.caption}
      </div>
    </div>
  )
};

// export
export default OneMedia;