import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import Interview from './Interview';
import InterviewInvert from './InterviewInvert';

// we declare a reference variable, which will allow us to decide
// if we want the component to be used Interview, or InterviewInvert
let reference = 0;

const Interviews = ({ interviews }) => {
  const randomPadding = () => {
    return Math.floor(Math.random() * (150 - 0)) + 0;
  };

  return (
    <div className="container__interviews">
      {
        // eslint-disable-next-line array-callback-return
        interviews.map((interview, index) => {
          if (index === 0) {
            // when the index is equal to 0, no random padding is applied to the component
            return (
              <Interview {...interview} />
            )
          }
          // for the following components, we apply a random padding
          else if (index !== 0) {
            // if "reference" is equal to 0, we use the component InterviewInvert
            if (reference === 0) {
              // we increment "reference"
              reference += 1;
              return (
                <InterviewInvert {...interview} randomPadding={randomPadding()} />
              )
            } 
            // if "reference" is equal to 1, we use the component Interview
            else if (reference === 1) {
              // reset "reference" to 0
              reference = 0;
              return (
                <Interview {...interview} randomPadding={randomPadding()} />
              )
            }
          }
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  interviews: state.interview.interviews,
});

export default connect(mapStateToProps, null)(Interviews);