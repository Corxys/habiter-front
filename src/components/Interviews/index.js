// import
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

// components import
import Interview from './Interview';
import InterviewInvert from './InterviewInvert';

const randomPadding = () => {
  return Math.floor(Math.random() * (100 - 0)) + 0;
};

// component
const Interviews = ({ interviews }) => {
  // we declare a reference variable, which will allow us to decide
  // if we want the component to be used Interview, or InterviewInvert
  let reference = 0;

  return (
    <section className="interviews">
      {
        interviews && 
        // eslint-disable-next-line array-callback-return
        interviews.map((interview, index) => {
          if (index === 0) {
            // when the index is equal to 0, no random padding is applied to the component
            return (
              <Interview
                {...interview}
                key={ interview.id }
              />
            )
          }
          // for the following components, we apply a random padding
          else if (index !== 0) {
            // if "reference" is equal to 0, we use the component InterviewInvert
            if (reference === 0) {
              // we increment "reference"
              reference += 1;
              return (
                <InterviewInvert
                  {...interview}
                  key={ interview.id }
                  randomPadding={ randomPadding() }
                />
              )
            } 
            // if "reference" is equal to 1, we use the component Interview
            else if (reference === 1) {
              // reset "reference" to 0
              reference = 0;
              return (
                <Interview
                  {...interview}
                  key={ interview.id }
                  randomPadding={ randomPadding() }
                />
              )
            }
          }
        })
      }
    </section>
  );
};

// proptypes
Interviews.propTypes = {
  interviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  interviews: state.interview.interviews,
});

// export
export default connect(mapStateToProps, null)(Interviews);