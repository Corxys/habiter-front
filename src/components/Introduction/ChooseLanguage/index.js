// import
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// icons
import { ReactComponent as SwitchLanguageIcon } from '../../../assets/icons/navbar-langue.svg';

// component
const ChooseLanguage = ({ changeLanguage }) => {
  const { i18n } = useTranslation();

  // quand l'utilisateur arrive sur l'application, les éléments s'affichent. d'abord, l'icône pour indiquer qu'on doit choisir une langue
  const fadeInIcon = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 0,
  });

  // et enfin le texte avec les trois langues disponibles
  const fadeInLangues = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
    },
    delay: 600,
  });

  return (
    <div
      className="introduction__choose-langue"
    >
      <animated.div
        className="introduction__choose-langue__icon"
        style={ fadeInIcon }
      >
        <SwitchLanguageIcon
        />
      </animated.div>
      <animated.div 
        className="introduction__choose-langue__langues"
        style={ fadeInLangues }
      >
        <div 
          className="introduction__choose-langue__langue"
          onClick={() => {
            i18n.changeLanguage('fr');
            changeLanguage('fr');
          }}
        >
          Français
        </div>
        <div 
          className="introduction__choose-langue__langue"
          onClick={() => {
            i18n.changeLanguage('en');
            changeLanguage('en');
          }}
        >
          English
        </div>
        <div 
          className="introduction__choose-langue__langue"
          onClick={() => {
            i18n.changeLanguage('de');
            changeLanguage('de');
          }}
        >
          Deutsch
        </div>
      </animated.div>
    </div> 
  )
};

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (language) => {
    // on stocke la langue choisie dans le localStorage
    localStorage.setItem('language', language);
    localStorage.setItem('show_languages', false);

    // et on déclenche un nouveau render avec un dispatch
    dispatch({
      type: 'HIDE_LANGUAGES',
    });
  },
})

// export
export default connect(null, mapDispatchToProps)(ChooseLanguage);