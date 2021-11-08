import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';

import './styles.scss';

import Header from './Header';
import Medias from './Medias';
import Audios from './Audios';
import References from './References';
import Quotes from './Quotes';

// let reference = 0;

const InterviewPage = ({ fadeInContent, interview }) => {
  return (
    <animated.div className="interview-page" style={ fadeInContent }>
      <Header interview={ interview } />
      {
        interview.media.length >= 1 &&
        <Medias
          medias={ interview.media }
          mediaCopyright={ interview.media_copyright }
        />
      }
      {
        interview.audio.length >= 1 &&
        <Audios audios={ interview.audio } />
      }
      {
        interview.quote.length >= 1 &&
        <Quotes quotes={ interview.quote } />
      }
      {
        interview.reference.length >= 1 && 
        <References references={ interview.reference } />
      }
    </animated.div>
  )
};

const mapStateToProps = (state) => ({
  interview: state.interview.interview,
});

export default connect(mapStateToProps, null)(InterviewPage);