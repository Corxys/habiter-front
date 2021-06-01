import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFR from './assets/locales/fr/translation.json';
import translationEN from './assets/locales/en/translation.json';
import translationDE from './assets/locales/de/translation.json';

i18n
  .use(initReactI18next) // pas the i18n instance to react-i18next
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    resources: {
      fr: { 
        translation: translationFR
      },
      en: { 
        translation: translationEN
      },
      de: { 
        translation: translationDE
      },
    },
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: false
    }
  });

export default i18n;
