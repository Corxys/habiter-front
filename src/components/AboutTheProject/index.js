// import
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// component
const AboutTheProject = () => {
  const { t } = useTranslation();

  return (
    <article className="project">
      <section className="project__header">
        {/* PROJECT => title */}
        <h1 className="project__title">
          Habiter
        </h1>
      </section>
      <section className="project__content">
        <div className="project__content__text-container">
          {/* PROJECT => introduction */}
          <p className="project__content__text">
            { t('about-the-project.text') }
          </p>
          <div className="project__content__text"></div>
          <div className="project__content__text"></div>
          {/* PROJECT => acknowledgments */}
          <div className="project__content__text">
            <h2 className="project__subtitle">
              { t('about-the-project.acknowledgments.title') }
            </h2>
            <p className="project__text container__project__text">
              { t('about-the-project.acknowledgments.text') }
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

// export
export default AboutTheProject;