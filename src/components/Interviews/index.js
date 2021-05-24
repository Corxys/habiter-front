import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import Interview from './Interview';
import InterviewInvert from './InterviewInvert';

let ref = 0;

const Interviews = ({ interviews }) => {
  const randomPadding = () => {
    return Math.floor(Math.random() * (150 - 0)) + 0;
  };

  return (
    <div className="container__interviews">
      {
        interviews.map(interview => {
          if (ref === 0) {
            ref += 1;
            return (
              <Interview {...interview} randomPadding={randomPadding()} />
            )
          } else if (ref === 1) {
            ref = 0;
            return (
              <InterviewInvert {...interview} randomPadding={randomPadding()} />
            )
          }
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  interviews: state.interviews,
});

export default connect(mapStateToProps, null)(Interviews);