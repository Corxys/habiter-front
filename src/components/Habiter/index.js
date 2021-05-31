import React from 'react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './styles.scss';

import NavBar from '../NavBar';
import Interviews from '../Interviews';
import AboutTheProject from '../AboutTheProject';
import AboutTheArtists from '../AboutTheArtists';
import Ressources from '../Ressources';
import InterviewPage from '../InterviewPage';

const Habiter = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <NavBar />
      <div className="line"></div>
      <div className="container__content">
        <Route exact path="/">
          <Interviews />
        </Route>
        <Route exact path={ t('routes.about-the-project') }>
          <AboutTheProject />
        </Route>
        <Route exact path={ t('routes.about-the-artists') }>
          <AboutTheArtists />
        </Route>
        <Route exact path={ t('routes.resources') }>
          <Ressources />
        </Route>
        <Route exact path={ t('routes.interviews') }>
          <InterviewPage />
        </Route>
      </div>
    </div>
  )
};

export default Habiter;