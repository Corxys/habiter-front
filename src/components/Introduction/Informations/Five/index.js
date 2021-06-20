// import
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';

// component
const ParagraphFive = ({
  calculateDelayFadeOut,
  sentence,
  letter,
  paragraph,
  showNextParagraph,
}) => {
  const fadeOutParagraph = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: {
      duration: 600,
    },
    delay: calculateDelayFadeOut(paragraph),
    onRest: () => {
      showNextParagraph();
    }
    });

  return (
    <animated.div 
      className="introduction__informations__paragraph"
      style={ fadeOutParagraph }
    >
      <motion.div
        className="introduction__informations__text"
        variants={ sentence }
        initial="hidden"
        animate="visible"
      >
        {
          paragraph.lines.map((line, index) => {
            return (
              <div key={ index } className="introduction__informations__text__line">
                {
                  line.split('').map((char, index) => {
                    return (
                        <motion.span key={ char + "-" + index } variants={ letter }>
                          { char }
                        </motion.span>
                    )
                  })
                }
                <br />
              </div>
            )
          })
        }
      </motion.div>
    </animated.div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  showNextParagraph: () => {
    dispatch({
      type: 'HIDE_PARAGRAPH_FIVE',
    });
  },
});

// export
export default connect(null, mapDispatchToProps)(ParagraphFive);