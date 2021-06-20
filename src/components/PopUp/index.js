// import 
import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { connect } from 'react-redux';

// styles
import './styles.scss';

// component
const PopUp = ({
  calculateDelayFadeOut,
  popUp,
  hidePopUp,
  showNextPopUp,
  randomItem,
}) => {
  const displayBlock = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 5000,
  });

  const undisplayBlock = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: {
      duration: 600,
    },
    delay: calculateDelayFadeOut(popUp) + 6000,
    onRest: () => {
      hidePopUp();
      showNextPopUp(randomItem);
    }
  });

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.04,
        delayChildren: 6,
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

  return (
    <animated.div
      className="pop-up"
      style={ undisplayBlock }
    >
      <animated.div 
        className="pop-up__content"
        style={ displayBlock }
      >
        <motion.div
          className="pop-up__text"
          variants={ sentence }
          initial="hidden"
          animate="visible"
        >
          {
            popUp.lines.map((line, index) => {
              if (popUp.link.length > 0) {
                return (
                  <span key={ index }>
                    <div key={ `pop-up-lines-${index}` } className="pop-up__text__line">
                      <a
                        href={ popUp.link[0] }
                        target="_blank"
                        rel="noreferrer"
                      >
                        {
                          line.split('').map((char, index) => {
                            return (
                              <motion.span key={char + "-" + index} variants={ letter }>
                                { char }
                              </motion.span>
                            )
                          })
                        }
                        </a>
                    </div>
                    {
                      popUp.source.map((line, index) => {
                        return (
                          <span key={ index }>
                            <div key={ `pop-up-source-${index}` } className="pop-up__text__line--regular">
                            <a
                              href={ popUp.link[0] }
                              target="_blank"
                              rel="noreferrer"
                            >
                              {
                                line.split('').map((char, index) => {
                                  return (
                                    <motion.span key={char + "-" + index} variants={ letter }>
                                      { char }
                                    </motion.span>
                                  )
                                })
                              }
                              </a>
                            </div>
                          </span>
                        )
                      })
                    }
                  </span>
                )
              } else {
                return (
                  <div key={ `popup-lines-${index}` }className="introduction__informations__text__line">
                    {
                      <>
                      <div className="pop-up__text__line">
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
                      {
                        popUp.source.map((line) => {
                          return (
                            <>
                              <div key={ `popup-source-${index}` }className="pop-up__text__line--regular">
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
                            </>
                          )
                        })
                      }
                    </>
                    }
                  </div>
                )
              }
            })
          }
        </motion.div> 
      </animated.div>
    </animated.div>
  )
};

const mapStateToProps = (state) => ({
  showPopUpContent: state.habiter.showPopUpContent,
});

const mapDispatchToProps = (dispatch) => ({
  hidePopUp: () => {
    dispatch({
      type: 'HIDE_POPUP',
    });
  },

  showNextPopUp: (randomItem) => {
    const delay = randomItem(30000, 60000);

    setTimeout(() => {
      dispatch({
        type: 'SHOW_POPUP',
      })
    }, delay)
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(PopUp);