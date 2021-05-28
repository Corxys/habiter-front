import React from 'react';
import { Route } from 'react-router-dom';

import './styles.scss';

import NavBar from '../NavBar';
import Interviews from '../Interviews';
import AboutTheProject from '../AboutTheProject';
import AboutTheArtists from '../AboutTheArtists';
import Ressources from '../Ressources';
import InterviewPage from '../InterviewPage';

const Habiter = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="line"></div>
      <div className="container__content">
        <Route exact path="/">
          <Interviews />
        </Route>
        <Route exact path="/a-propos-du-projet">
          <AboutTheProject />
        </Route>
        <Route exact path="/a-propos-des-artistes">
          <AboutTheArtists />
        </Route>
        <Route exact path="/ressources">
          <Ressources />
        </Route>
        <Route exact path="/interviews/:id">
          <InterviewPage />
        </Route>
      </div>
    </div>
  )
};

export default Habiter;