// import
import React from 'react';
import { connect } from 'react-redux';

// styles
import './styles.scss';

// icon
import { ReactComponent as IconSkip } from '../../assets/icons/interview-page-play.svg';

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
}) => {
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
      {
        !showHabiter && (
          <div
            className="introduction__skip"
            onClick={() => {
              skipIntroduction();
            }}
          >
            <IconSkip />
          </div>
        )
      }
      
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
    </>
  )
};

const mapStateToProps = (state) => ({
  showHabiter: state.habiter.showHabiter,
  showLanguages: state.habiter.showLanguages,
  showInformations: state.habiter.showInformations,
  showTitle: state.habiter.showTitle,
});

const mapDispatchToProps = (dispatch) => ({
  skipIntroduction: () => {
    dispatch({
      type: 'SKIP_INTRODUCTION',
    });
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Introduction);