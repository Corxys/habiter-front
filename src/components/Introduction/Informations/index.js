// import
import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

// styles
import './styles.scss';

// components import
import ParagraphOne from './One';
import ParagraphTwo from './Two';
import ParagraphThree from './Three';
import ParagraphFour from './Four';

// component
const Informations = ({
  calculateDelayFadeOut,
  showParagraphOne,
  showParagraphTwo,
  showParagraphThree,
  showParagraphFour,
}) => {
  const { t } = useTranslation();

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
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

  const paragraphs = t('introduction:paragraphs', { returnObjects: true });

  return (
    <div className="introduction__informations">
      {showParagraphOne && (
        <ParagraphOne
          calculateDelayFadeOut={ calculateDelayFadeOut }
          sentence={ sentence }
          letter={ letter }
          paragraph={ paragraphs[0] }
        />
      )}
      {showParagraphTwo && (
        <ParagraphTwo
          calculateDelayFadeOut={ calculateDelayFadeOut }
          sentence={ sentence }
          letter={ letter }
          paragraph={ paragraphs[1] }
        />
      )}
      {showParagraphThree && (
        <ParagraphThree
          calculateDelayFadeOut={ calculateDelayFadeOut }
          sentence={ sentence }
          letter={ letter }
          paragraph={ paragraphs[2] }
        />
      )}
      {showParagraphFour && (
        <ParagraphFour
          calculateDelayFadeOut={ calculateDelayFadeOut }
          sentence={ sentence }
          letter={ letter }
          paragraph={ paragraphs[3] }
        />
      )}
    </div>
  )
};

const mapStateToProps = (state) => ({
  showParagraphOne: state.habiter.paragraph.showParagraphOne,
  showParagraphTwo: state.habiter.paragraph.showParagraphTwo,
  showParagraphThree: state.habiter.paragraph.showParagraphThree,
  showParagraphFour: state.habiter.paragraph.showParagraphFour,
});

const mapDispatchToProps = (dispatch) => ({
  informationShown: () => {
    // on déclenche un render avec un dispatch
    dispatch({
      type: 'INFORMATION_SHOWN',
    });
  },
});

// export
export default connect(mapStateToProps, mapDispatchToProps)(Informations);