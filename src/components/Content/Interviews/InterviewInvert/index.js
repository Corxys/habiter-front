import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { buildInterviewUrl } from '../../../../utils/buildInterviewUrl';

import './styles.scss';

const InterviewInvert = ({
  interview,
  randomPadding,
  getInterviewById,
  setIsOpen,
}) => {
  const [hovered, setHovered] = useState(false);
  const { id, miniature, author, location, language } = {...interview};
  
  const textStyle = hovered ? { color: '#0000FF' } : {};
  const imageStyle = hovered ? { filter: 'grayscale(100%)', opacity: '0.5' } : {};

  return (
    <div
      className="interview interview--invert"
      style={{ paddingBottom: randomPadding }}
    >
      <div
        className="interview__text"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={ textStyle }
      >
        <Link
          to={ author ? buildInterviewUrl(author) : author }
          >
          <div
            id={ id }
            className="interview__text__title"
            onClick={(event) => {
              getInterviewById(event, interview);
              setIsOpen(false);
            }}
          >
            { author }
          </div>
        </Link>
        <div className="interview__text__location">
          { location }
          <br />
          <br />
          ({ language })
        </div>
      </div>
      
      <div className="interview__image">
        {
          miniature &&
          <Link
          to={ author ? buildInterviewUrl(author) : author }
          >
            <img
              id={ id }
              onClick={(event) => {
                getInterviewById(event, interview);
                setIsOpen(false);
              }}
              src={ miniature.url }
              alt=""
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={ imageStyle }
            />
          </Link>
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getInterviewById: (event, interview) => {
    dispatch({
      type: 'GET_INTERVIEW',
      payload: {
        interview: interview,
      },
    });
  },
})

export default connect(null, mapDispatchToProps)(InterviewInvert);