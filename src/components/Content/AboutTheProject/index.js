// import
import React from 'react';
import { useTranslation } from 'react-i18next';
import { animated } from 'react-spring';

// styles
import './styles.scss';

// component
const AboutTheProject = ({ fadeInContent }) => {
  const { t } = useTranslation();

  return (
    <animated.article className="project" style={ fadeInContent }>
      <section className="project__text">
        <p className="project__text__content">
          { t('aboutTheProject:text') }
        </p>
      </section>
      <section className="project__acknowledgments">
        <div className="project__acknowledgments__text">
          <h2 className="project__acknowledgments__subtitle">
            { t('aboutTheProject:acknowledgments.title') }
          </h2>
          <p className="project__acknowledgments__text__content">
            { t('aboutTheProject:acknowledgments.text') }
          </p>
        </div>
      </section>
    </animated.article>
  );
};

// export
export default AboutTheProject;