import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import Medias from './Medias';
import Audios from './Audios';
import References from './References';

// let reference = 0;

const InterviewPage = ({ interview }) => {
  return (
    <div className="interview-page">
      {/* HEADER - START */}
      <div className="interview-page__header">
        {/* INTRODUCTION => name, location, image */}
        <div className="interview-page__header__intro">
          <div className="interview-page__header__intro__author">
            <h1 className="interview-page__header__intro__author__name">
              { interview.author }
            </h1>
            <div className="interview-page__header__intro__author__location">
              { interview.location }
            </div>
            <div className="interview-page__header__intro__author__translated-from">
              { interview.translated_from}
            </div>
          </div>          
          { interview.media.length >= 1 &&
            <div
              className="interview-page__header__intro__image"
            >
              <div 
                className="interview-page__header__intro__image__legend"
              >
                Crédit photo : { interview.media_copyright }
              </div>
              <img src={ interview.media[0].source[0].url } alt="" />
            </div>
          }
        </div>
        <p className="interview-page__header__text">
          { interview.text }
        </p>
      </div>
      {/* HEADER - END */}


      {
        interview.media.length >= 1 &&
        <Medias
          medias={ interview.media }
        />
      }

      {
        interview.audio.length >= 1 &&
        <Audios audios={interview.audio} />
      }

      {
        interview.reference.length >= 1 && 
        <References references={interview.reference} />
      }
    </div>
  )
};

const mapStateToProps = (state) => ({
  interview: state.interview.interview,
});

export default connect(mapStateToProps, null)(InterviewPage);