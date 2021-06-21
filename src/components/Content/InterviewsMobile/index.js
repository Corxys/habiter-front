// import
import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

// components import
import Interview from '../Interviews/Interview';

// component
const InterviewsMobile = ({ setIsOpen, fadeInContent, interviews }) => {
  return (
    <animated.section
      className="interviews__mobile"
      style={ fadeInContent }
    >
      {
        interviews && 
        // eslint-disable-next-line array-callback-return
        interviews.map((interview) => {
          return (
            <Interview
              setIsOpen={ setIsOpen }
              interview={ interview }
              key={ interview.id }
            />
          )
        })
      }
    </animated.section>
  );
};

// proptypes
InterviewsMobile.propTypes = {
  interviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  interviews: state.interviews.interviews,
  currentPage: state.pagination.currentPage,
});

// export
export default connect(mapStateToProps, null)(InterviewsMobile);