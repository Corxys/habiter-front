// import
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// component
const AboutTheProject = () => {
  const { t } = useTranslation();

  return (
    <div className="project">
      <div className="project__title">
        Habiter
      </div>
      <div className="project__content">
        <div className="project__content__background"></div>
        <div className="project__content__texts">
          <div className="project__content__text">
            { t('about-the-project.text') }
          </div>
          <div className="project__content__text">
          </div>
          <div className="project__content__text">
          </div>
          <div className="project__content__text">
            <h2 className="project__subtitle">
              { t('about-the-project.acknowledgments.title') }
            </h2>
            <div className="project__text container__project__text">
              { t('about-the-project.acknowledgments.text') }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheProject;