// import
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// icons
import { ReactComponent as SwitchLanguageIcon } from '../../../assets/icons/navbar-langue.svg';

// component
const SwitchLanguage = () => {
  const [displayed, setDisplayed] = useState(false);

  const languages = ['fr', 'en', 'de'];

  const { i18n } = useTranslation();

  // const changeLanguage = ( nextLanguage ) => {
  //   const routes = i18n.getResourceBundle(i18n.language, 'routes');
  //   console.log('Current language :', i18n.language + '.');
  //   console.log('Current routes :', routes);

  //   const nextRoutes = i18n.getResourceBundle(nextLanguage, 'routes');
  //   console.log('Next language :', nextLanguage + '.');
  //   console.log('Next routes :', nextRoutes);

  //   const currentPathname = window.location.pathname;
  //   console.log('Actual pathname :', currentPathname);

  //   const currentRouteKey = Object.keys(routes).find((key) => routes[key] === currentPathname);
  //   console.log('Current route key :', currentRouteKey);

    
  //   window.location.replace( t(`routes:${currentRouteKey}`) );
  // };

  return (
    <div className="navbar__list__icon">
      <SwitchLanguageIcon 
        className="navbar__list__icon__item"
        onClick={() => {
          setDisplayed(!displayed)
        }}
      />
      <div
        className="navbar__list__icon__item__select"
        style={ displayed ? { display: 'block' } : { display: 'none' } }
      >
        {
          languages.map((language) => {
            return (
              <div
                className="navbar__list__icon__item__option"
                onClick={() => {
                  i18n.changeLanguage(language);
                  setDisplayed(false);
                }}
                style={
                  i18n.language === language ?
                  { backgroundColor: '#FF2519', fontWeight: 'bold' } :
                  { backgroundColor: '#FFFFFF' }
                }
              >{ language.toUpperCase() }</div>
            )
          })
        }
      </div>
    </div>
  )
};

export default SwitchLanguage;