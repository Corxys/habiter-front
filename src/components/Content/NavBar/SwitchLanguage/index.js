// import
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

// icons
import { ReactComponent as SwitchLanguageIcon } from '../../../../assets/icons/navbar-langue.svg';

// component
const SwitchLanguage = ({ changeLanguage }) => {
  const [displayed, setDisplayed] = useState(false);

  const languages = ['fr', 'en', 'de'];

  const { i18n } = useTranslation();

  return (
    <div className="navbar__icon">
      <SwitchLanguageIcon 
        className="navbar__icon__item"
        onClick={() => {
          setDisplayed(!displayed)
        }}
      />
      <div
        className="navbar__icon__item__select"
        style={ displayed ? { display: 'block' } : { display: 'none' } }
      >
        {
          languages.map((language) => {
            return (
              <div
                key={language}
                className="navbar__icon__item__option"
                onClick={() => {
                  changeLanguage(language);
                  i18n.changeLanguage(language);
                  setDisplayed(false);
                }}
                style={
                  i18n.language === language ?
                  { backgroundColor: '#0000FF', fontWeight: 'bold' } :
                  { }
                }
              >{ language.toUpperCase() }</div>
            )
          })
        }
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => {
    localStorage.setItem('langue', language)
  },
});

// export
export default connect(null, mapDispatchToProps)(SwitchLanguage);