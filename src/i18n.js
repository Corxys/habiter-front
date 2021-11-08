import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import introductionFR from './assets/locales/fr/introduction.json'; 
import introductionEN from './assets/locales/en/introduction.json';
import introductionDE from './assets/locales/de/introduction.json';

import navbarFR from './assets/locales/fr/navbar.json';
import navbarEN from './assets/locales/en/navbar.json';
import navbarDE from './assets/locales/de/navbar.json';

import aboutTheProjectFR from './assets/locales/fr/about-the-project.json';
import aboutTheProjectEN from './assets/locales/en/about-the-project.json';
import aboutTheProjectDE from './assets/locales/de/about-the-project.json';

import aboutTheArtistsFR from './assets/locales/fr/about-the-artists.json';
import aboutTheArtistsEN from './assets/locales/en/about-the-artists.json';
import aboutTheArtistsDE from './assets/locales/de/about-the-artists.json';

import interviewPageFR from './assets/locales/fr/interview-page.json';
import interviewPageEN from './assets/locales/en/interview-page.json';
import interviewPageDE from './assets/locales/de/interview-page.json';

import popUpFR from './assets/locales/fr/pop-up.json'; 
import popUpEN from './assets/locales/en/pop-up.json'; 
import popUpDE from './assets/locales/de/pop-up.json'; 

let lng = localStorage.getItem('language');

const setLng = () => {
  if (!lng) {
    lng = 'fr';
    return lng;
  } else {
    return lng;
  }
}

i18n
  .use(initReactI18next) // pas the i18n instance to react-i18next
  .init({
    lng: setLng(),
    fallbackLng: setLng(),
    resources: {
      fr: { 
        introduction: introductionFR,
        navbar: navbarFR,
        aboutTheProject: aboutTheProjectFR,
        aboutTheArtists: aboutTheArtistsFR,
        interviewPage: interviewPageFR,
        popUp: popUpFR,
      },
      en: { 
        introduction: introductionEN,
        navbar: navbarEN,
        aboutTheProject: aboutTheProjectEN,
        aboutTheArtists: aboutTheArtistsEN,
        interviewPage: interviewPageEN,
        popUp: popUpEN,
      },
      de: { 
        introduction: introductionDE,
        navbar: navbarDE,
        aboutTheProject: aboutTheProjectDE,
        aboutTheArtists: aboutTheArtistsDE,
        interviewPage: interviewPageDE,
        popUp: popUpDE,
      },
    },
  });

export default i18n;
