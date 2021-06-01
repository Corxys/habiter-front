import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

const AboutTheArtists = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__artists">
        <div className="about__artist about__artist--eliana">
          <h1 className="about__artist__name">
            Eliana
            <br />
            Pliskin Jacobs
          </h1>
          <div className="about__artist__text about__artist__text--eliana">
            { t('about-the-artists.eliana-jacobs') }
          </div>
        </div>
        <div className="about__artist about__artist--sita">
          <h1 className="about__artist__name">
            Sîta
            <br/>
            Subias
          </h1>
          <div className="about__artist__text">
            { t('about-the-artists.sita-subias') }
          </div>
        </div>
      </div>
      <div className="about__since">
        <div className="about__since__background">
          <div className="about__since__text">
            { t('about-the-artists.text') }
          </div> 
        </div>
      </div>
      <div className="about__contact">
        <div className="about__contact__title">
          { t('about-the-artists.contact.title') }
        </div>
        <div className="about__contact__text">
          <div className="about__contact__text__name">
          Eliana Pliskin Jacobs & Sîta Subias
          </div>
          <div className="about__contact__text__line"></div>
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
      </div>
      <div className="about__opencall">
        <div className="about__opencall__background"></div>
        <div className="about__opencall__wrapper">
          <div className="about__opencall__wrapper__title">
            {/* <div className="about__opencall__wrapper__title--bold">
            </div> */}
            { t('about-the-artists.open-call.title') }
          </div>
          <div className="about__opencall__wrapper__content">
            <OpenCall className="about__opencall__wrapper__content__icon" />
            <div className="about__opencall__wrapper__content__text">
              { t('about-the-artists.open-call.part-1') }
              
              <div className="about__opencall__wrapper__content__text--underline">
                <a
                  href="mailto:habiter.project@gmail.com"
                >
                  habiter.project@gmail.com
                </a>
              </div>
              { t('about-the-artists.open-call.part-2') }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheArtists;