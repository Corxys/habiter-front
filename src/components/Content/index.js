// import
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { Route } from 'react-router-dom';
import ReactLoading from 'react-loading';

// styles
import './styles.scss';

// components import
import NavBar from './NavBar';
import Interviews from './Interviews';
import InterviewsMobile from './InterviewsMobile';
import AboutTheProject from './AboutTheProject';
import AboutTheArtists from './AboutTheArtists';
import Resources from './Resources';
import InterviewPage from './InterviewPage';

// component
const Content = ({ loaded, showHabiter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const lineVertical = useSpring({
    from: {
      opacity: 0,
      height: '0%'
    },
    to: {
      opacity: 1,
      height: 'calc(100% + 150px)'
    },
    config: {
      duration: 1000,
    },
    delay: 0,
  });

  const fadeInContent = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 4000, 
  });

  return (
    <>
      <NavBar isOpen={ isOpen } setIsOpen={ setIsOpen } />
        <main
          className="habiter__content"
        >
          {
            showHabiter &&
            <animated.div
              className="line__vertical"
              style={ lineVertical }
            ></animated.div>
          }
          <Route exact path="/">
            {showHabiter && !loaded ?
              <div className="habiter__loading">
                <ReactLoading
                  type={ 'bubbles' }
                  color={ '#0000FF' }
                  height={ 75 }
                  width={ 75 }
                />
              </div>
              :
              <>
                <Interviews fadeInContent={ fadeInContent } setIsOpen={ setIsOpen }/>
                <InterviewsMobile isOpen={ isOpen } setIsOpen={ setIsOpen } fadeInContent={ fadeInContent } />
              </>
            }
          </Route>
          <Route exact path="/about-the-exhibition">
            <AboutTheProject fadeInContent={ fadeInContent } />
          </Route>
          <Route exact path="/about-the-artists">
            <AboutTheArtists fadeInContent={ fadeInContent } />
          </Route>
          <Route exact path="/resources">
            <Resources fadeInContent={ fadeInContent } />
          </Route>
          <Route exact path="/interviews/:id">
            <InterviewPage fadeInContent={ fadeInContent } />
          </Route>
        </main>
    </>
  )
};

const mapStateToProps = (state) => ({
  loaded: state.interviews.loaded,
});

export default connect(mapStateToProps, null)(Content);