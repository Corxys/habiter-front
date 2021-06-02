// import
import React from 'react';
import { Route } from 'react-router-dom';

// styles
import './styles.scss';

// components import
import NavBar from '../NavBar';
import Interviews from '../Interviews';
import AboutTheProject from '../AboutTheProject';
import AboutTheArtists from '../AboutTheArtists';
import Resources from '../Resources';
import InterviewPage from '../InterviewPage';

// component
const Habiter = () => {  
  return (
    <div className="habiter">
      <NavBar />
      <div className="line"></div>
      <main className="habiter__content">
        <Route exact path="/">
          <Interviews />
        </Route>
        <Route exact path="/about-the-project">
          <AboutTheProject />
        </Route>
        <Route exact path="/about-the-artists">
          <AboutTheArtists />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/interviews/:id">
          <InterviewPage />
        </Route>
      </main>
    </div>
  )
};

// export
export default Habiter;