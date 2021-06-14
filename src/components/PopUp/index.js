// import 
import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useSpring, animated } from 'react-spring';
// import { motion } from 'framer-motion';

// styles
import './styles.scss';

const randomItem = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
};

// component
const PopUp = () => {
  const { t } = useTranslation();

  let popUp = {};  
  const popUps = t('popUp:pop-ups', { returnObjects: true });

  const indexOfRandomPopUp = randomItem(0, popUps.length);

  const getRandomPopUp = (datas) => {
    let currentPopUp = {}; 

    datas.forEach((item, index) => {
      if (index === indexOfRandomPopUp) {
        currentPopUp = item;
      };
    });

    return currentPopUp;
  };

  popUp = getRandomPopUp(popUps);
  // const { lines, source, link } = {...popUp};

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };


  // const calculateDelayFadeOut = (text) => {
  //   let nbChar = 0;

  //   if (typeof(text) === 'string') {
  //     nbChar = text.length;
  //     nbChar *= (0.08 + 3.5);
  //     nbChar *= 100;
  //     nbChar = Math.round(nbChar) + 1000;
  //   }

  //   if (typeof(text) === 'object') {
  //     text.lines.forEach((line) => {
  //       nbChar += line.length;
  //     });

  //     nbChar *= 0.04;
  //     nbChar *= 1000;
  //     nbChar = Math.round(nbChar) + 3000;
  //   }
  
  //   return nbChar;
  // };

  // const fadeOutParagraph = useSpring({
  //   from: { opacity: 1 },
  //   to: { opacity: 0 },
  //   config: {
  //     duration: 600,
  //   },
  //   delay: calculateDelayFadeOut(paragraph),
  //   onRest: () => {
  //     // showNextParagraph();
  //   }
  //   });

  return (
    <div className="pop-up">
      {/* <animated.div 
        className="introduction__informations__paragraph"
        // style={ fadeOutParagraph }
      >
        <motion.div
          className="introduction__informations__text"
          variants={ sentence }
          initial="hidden"
          animate="visible"
        >
          {
            lines.map((line) => {
              return (
                <div className="introduction__informations__text__line">
                    {
                      line.split('').map((char, index) => {
                        return (
                          <motion.span key={char + "-" + index} variants={ letter }>
                            { char }
                          </motion.span>
                        )
                      })
                    }
                  </div>
                )
            })
          }
        </motion.div>
      </animated.div> */}
    </div>
  )
};

// export
export default PopUp;