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

  const fadeOutContent = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: {
      duration: 600,
    }, 
    delay: 7840,
    onRest: () => {
      setTimeout(() => {
        titleShown();
      }, 2000);
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
      </animated.div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  titleShown: () => {
    dispatch({
      type: 'HIDE_TITLE',
    });

    setTimeout(() => {
      dispatch({
        type: 'SHOW_POPUP',
      })
    }, 10000);
  },
});

export default connect(null, mapDispatchToProps)(Title);