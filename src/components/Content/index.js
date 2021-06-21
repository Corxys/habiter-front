// import
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Route } from 'react-router-dom';

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
const Content = ({ showHabiter }) => {
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
          {/* <PopUp popUp={ popUp } /> */}
          <Route exact path="/">
            <Interviews fadeInContent={ fadeInContent } />
            <InterviewsMobile isOpen={ isOpen } setIsOpen={ setIsOpen } fadeInContent={ fadeInContent } />
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

// export
export default Content;