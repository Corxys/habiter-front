// import
import React from 'react';
import { useTranslation } from 'react-i18next';
import { animated } from 'react-spring';

// styles
import './styles.scss';

// component
const AboutTheArtists = ({ fadeInContent }) => {
  const { t } = useTranslation();

  return (
    <animated.article className="about" style={ fadeInContent }>
      <section className="about__artists">
        {/* ARTISTS => ELIANA */}
        <div className="about__artist about__artist--eliana">
          <h1 className="about__artist__name">
            Eliana
            <br />
            Pliskin Jacobs
          </h1>
          <p className="about__artist__text about__artist__text--eliana">
            { t('aboutTheArtists:eliana-jacobs') }
          </p>
        </div>
        {/* ARTISTS = SITA */}
        <div className="about__artist about__artist--sita">
          <h1 className="about__artist__name">
            Sîta
            <br/>
            Subias
          </h1>
          <p className="about__artist__text">
            { t('aboutTheArtists:sita-subias') }
          </p>
        </div>
      </section>
      <section className="about__since">
        <div className="about__since__text">
          { t('aboutTheArtists:text') }
        </div> 
      </section>
      <section id="contact" className="about__contact">
        <h2 className="about__contact__title">
          { t('aboutTheArtists:contact.title') }
        </h2>
        <div className="about__contact__text">
          <div className="about__contact__text__mail">
            <a
              href="mailto:habiter.project@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              habiter.project@gmail.com
            </a>
          </div>
        </div>
      </section>
      <section className="about__opencall">
        <div className="about__opencall__wrapper">
          <h2 className="about__opencall__wrapper__title">
            { t('aboutTheArtists:open-call.title') }
          </h2>
          <div className="about__opencall__wrapper__content">
            <div className="about__opencall__wrapper__content__text">
              { t('aboutTheArtists:open-call.first-part') }
              <div className="about__opencall__wrapper__content__text--underline">
                <a
                  href="mailto:habiter.project@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  habiter.project@gmail.com
                </a>
              </div>
              { t('aboutTheArtists:open-call.second-part') }
            </div>
          </div>
        </div>
      </section>
    </animated.article>
  );
};

// export
export default AboutTheArtists;