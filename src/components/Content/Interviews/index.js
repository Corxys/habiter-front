// import
import React from 'react';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

// components import
import Interview from './Interview';
import InterviewInvert from './InterviewInvert';

// icons
import { ReactComponent as PreviousIcon } from '../../../assets/icons/interviews-previous.svg';
import { ReactComponent as NextIcon } from '../../../assets/icons/interviews-next.svg';

// component
const Interviews = ({
  currentPage,
  nextPage,
  previousPage,
  fadeInContent,
  interviews,
  setIsOpen,
}) => {
  const pageLimit = 4;
  
  const infinitePagination = (index, size, array) => {
    // limit index to availables in length
    const i = index % array.length;
    // limit size to avoid showing duplicated items
    const l = Math.min(size - 1, array.length -1);
    const c = array.length - l;
    const frag1 = array.slice(array.length + i - 1, array.length);
    const frag2 = array.slice(i - 1, i);
    const frag3 = array.slice(i, i + l);
    const frag4 = array.slice(0, Math.max(0, i - c));
    
    return [...frag1, ...frag2, ...frag3, ...frag4];
  }

  const currentInterviews = infinitePagination(currentPage, pageLimit, interviews);

  return (
    <animated.div
      className="interviews-pagination__container"
      style={ fadeInContent }
      onWheel={(event) => {
        if (event.nativeEvent.wheelDelta > 0) {
          if (currentPage > 1) {
            previousPage(currentPage);
          }
        } else {
          nextPage(currentPage);
        }
      }}
    >
      <section className="interviews">
        {
          interviews && 
          // eslint-disable-next-line array-callback-return
          currentInterviews.map((interview, index) => {
            // if "interview.position" is equal to 0, we use the component InterviewInvert
            if (interview.position === 0) {
              return (
                <InterviewInvert
                  interview={ interview }
                  key={ interview.id }
                  randomPadding={ interview.random_padding }
                  setIsOpen={ setIsOpen }
                />
              )
            } 
            // if "interview.position" is equal to 1, we use the component Interview
            else if (interview.position === 1) {
              return (
                <Interview
                  interview={ interview }
                  key={ interview.id }
                  randomPadding={ interview.random_padding }
                  setIsOpen={ setIsOpen }
                />
              )
            }
          })
        }
      </section>
      <div className="interviews__pagination">
        <div 
          className="interviews__arrow"
        >
          {
            currentPage > 1 && 
            <PreviousIcon 
              onClick={() => {
                previousPage(currentPage)
              }}
            />
          }
        </div>
      <div
        className="interviews__arrow"
      >
        <NextIcon 
          onClick={() => {
            nextPage(currentPage);
          }}
        />
      </div>
      </div>
    </animated.div>
  );
};

// proptypes
Interviews.propTypes = {
  interviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  interviews: state.interviews.interviews,
  currentPage: state.pagination.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  nextPage: (currentPage) => {
    dispatch({
      type: 'NEXT_PAGE',
      payload: {
        currentPage: currentPage,
      }
    });
  },

  previousPage: (currentPage) => {
    dispatch({
      type: 'PREVIOUS_PAGE',
      payload: {
        currentPage: currentPage,
      }
    })
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Interviews);