// import
import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// icon
import { ReactComponent as IconSkip } from '../../assets/icons/interview-page-play.svg';

// videos
// import backgroundVideo from '../../assets/videos/introduction-background.mp4';

// components import
import ChooseLanguage from './ChooseLanguage';
import Informations from './Informations';
import Title from './Title';

// component
const Introduction = ({
  showHabiter,
  showLanguages,
  showInformations,
  showTitle,
  skipIntroduction,
  backgroundIntroVideo
}) => {
  const { i18n } = useTranslation();

  const calculateDelayFadeOut = (text) => {

    let nbChar = 0;

    if (typeof(text) === 'string') {
      nbChar = text.length;
      nbChar *= (0.08 + 3.5);
      nbChar *= 100;
      nbChar = Math.round(nbChar) + 1000;
    }

    if (typeof(text) === 'object') {
      text.lines.forEach((line) => {
        nbChar += line.length;
      });

      nbChar *= 0.04;
      nbChar *= 1000;
      nbChar = Math.round(nbChar) + 3000;
    }
  
    return nbChar;
  };

  return (
    <>
      {!showHabiter && (
        <div
          className="introduction__skip"
          onClick={() => {
            const languageInLocalStorage = localStorage.getItem('language');
            
            if (languageInLocalStorage) {
              i18n.changeLanguage(languageInLocalStorage);
            } else {
              i18n.changeLanguage('fr');
              localStorage.setItem('language', 'fr');
            }
            
            skipIntroduction();
          }}
        >
          <IconSkip />
        </div>
      )}
      
      {/* si showLanguages === true, on affiche la page de choix d'une langue */}
      {showLanguages && (
        <ChooseLanguage showLanguages={ showLanguages } />
      )}

      {/* si showInformations === true, on affiche la page des informations scientifiques */}
      {showInformations && (
        <Informations calculateDelayFadeOut={ calculateDelayFadeOut }/>
      )}
      
      {/* si showTitle === true, on affiche la page de titre */}
      {showTitle && (
          <Title />
      )}

      {(!showLanguages && !showHabiter) && (
        <video
          className='introduction__background'
          loop
          muted
          autoPlay
          preload
        >
          <source src={ backgroundIntroVideo } type='video/mp4' />
        </video>
      )}
    </>
  )
};

const mapStateToProps = (state) => ({
  showHabiter: state.habiter.showHabiter,
  showLanguages: state.habiter.showLanguages,
  showInformations: state.habiter.showInformations,
  showTitle: state.habiter.showTitle,
  backgroundIntroVideo: state.habiter.backgroundIntroVideo,
});

const mapDispatchToProps = (dispatch) => ({
  skipIntroduction: () => {
    dispatch({
      type: 'SKIP_INTRODUCTION',
    });

    setTimeout(() => {
      dispatch({
        type: 'SHOW_POPUP',
      })
    }, 10000);
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Introduction);