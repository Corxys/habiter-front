// import
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

// components import
import Interview from './Interview';
import InterviewInvert from './InterviewInvert';

// we declare a reference variable, which will allow us to decide
// if we want the component to be used Interview, or InterviewInvert

const randomPadding = () => {
  return Math.floor(Math.random() * (100 - 0)) + 0;
};

// component
const Interviews = ({ interviews }) => {
  let reference = 0;

  return (
    <section className="interviews">
      {
        // eslint-disable-next-line array-callback-return
        interviews.map((interview, index) => {
          if (index === 0) {
            console.log(index, reference);
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
              console.log(index, reference);
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
              console.log(index, reference);
              reference = 0;
              return (
                <Interview
                  {...interview}
                  key={ interview.id }
                  randomPadding={ randomPadding() }
                />
              )
            } else {

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