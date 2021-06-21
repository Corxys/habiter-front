// import
import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// components import
import Introduction from '../Introduction';
import Content from '../Content';
import PopUp from '../PopUp';

// functions
const randomItem = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomPopUp = (datas, indexOfRandomPopUp) => {
  let currentPopUp = {}; 

  datas.forEach((item, index) => {
    if (index === indexOfRandomPopUp) {
      currentPopUp = item;
    };
  });

  return currentPopUp;
};

// component
const Habiter = ({ showHabiter, showPopUp }) => {
  const { t } = useTranslation();

  let popUp = {};
  console.log(popUp);
  const popUps = t('popUp:pop-ups', { returnObjects: true });

  const indexOfRandomPopUp = randomItem(0, popUps.length);

  popUp = getRandomPopUp(popUps, indexOfRandomPopUp);

  const calculateDelayFadeOut = (text) => {
    console.log(text);
    let nbChar = 0;

    if (typeof(text) === 'string') {
      nbChar = text.length;
      nbChar *= (0.08 + 3.5);
      nbChar *= 100;
      nbChar = Math.round(nbChar) + 5000;
    }

    if (typeof(text) === 'object') {
      text.lines.forEach((line) => {
        nbChar += line.length;
      });

      if (text.source) {
        text.source.forEach((line) => {
          nbChar += line.length;
        })
      }

      nbChar *= 0.04;
      nbChar *= 1000;
      nbChar = Math.round(nbChar) + 5000;
    }
  
    return nbChar;
  };

  return (
    <>
      <div className="habiter">
        <Introduction />
        {showHabiter && (
          <Content
          showHabiter={ showHabiter }
          />
          )}

      </div>
      {popUp && showPopUp && (
        <PopUp
          popUp={ popUp }
          calculateDelayFadeOut={ calculateDelayFadeOut }
          randomItem={ randomItem }
        />
      )}
    </>
  )
};

const mapStateToProps = (state) => ({
  showHabiter: state.habiter.showHabiter,
  showPopUp: state.habiter.showPopUp,
});


// export
export default connect(mapStateToProps, null)(Habiter);