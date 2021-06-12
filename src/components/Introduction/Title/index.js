// import
import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

// styles
import './styles.scss';

// component
const Title = ({ titleShown }) => {
  const { t } = useTranslation();

  const content = t('introduction:title', { returnObjects: true });

  const sentenceTitle = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
        delayChildren: 1.5,
      },
    },
  };

  const letterTitle = {
    hidden: {
      opacity: 0,
      y: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const sentenceIntro = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
        delayChildren: 4.5,
      },
    },
  };

  const letterIntro = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const fadeOutContent = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: {
      duration: 600,
    },
    // 0.5 * 7 =
    // 3500ms => delay for apparition of "habiter"
    // 0.08 * 98 =
    // 7840ms => delay for apparition of "intro" text
    // 3500ms + 7840ms + 3500ms =
    // 14840ms => delay apparition for all of the texts 
    delay: 16500,
    onRest: () => {
      titleShown();
    },
  });

  return (
    <div className="introduction__title">
      <animated.div
        className="introduction__title__content"
        style={ fadeOutContent }
      >
        <motion.h1
          className="introduction__title__content__text"
          variants={ sentenceTitle }
          initial="hidden"
          animate="visible"
        >
          {
            content.text.split('').map((char, index) => {
              return (
                <motion.span key={ char + "-" + index } variants={ letterTitle }>
                  { char }
                </motion.span>
              )
            })
          }
        </motion.h1>
        <motion.div
          className="introduction__title__content__intro"
          variants={ sentenceIntro }
          initial="hidden"
          animate="visible"
        >
        {
            content.intro.split('').map((char, index) => {
              return (
                <motion.span key={ char + "-" + index } variants={ letterIntro }>
                  { char }
                </motion.span>
              )
            })
          }
        </motion.div>
      </animated.div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  titleShown: () => {
    localStorage.setItem('show_title', false);
    
    dispatch({
      type: 'HIDE_TITLE',
    });
  },
});

export default connect(null, mapDispatchToProps)(Title);