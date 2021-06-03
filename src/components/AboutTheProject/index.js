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
    </article>
  );
};

// export
export default AboutTheProject;