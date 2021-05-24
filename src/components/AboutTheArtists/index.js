import React from 'react';

import './styles.scss';

import { ReactComponent as OpenCall } from '../../assets/icons/navbar-open-call.svg';

const AboutTheArtists = () => {
  return (
    <div className="container__about">
      <div className="container__about__artists">
        <div className="container__about__artist container__about__artist--eliana">
          <div className="container__about__artist__name">
            Eliana
            <br />
            Pliskin Jacobs
          </div>
          <div className="container__about__artist__text container__about__artist__text--eliana">
            Eliana Pliskin Jacobs est une artiste visuelle, chanteuse et artiste de cirque. Elle est titulaire d'un bachelor en histoire de l'art indigène et en arts visuels de l'Université de la Colombie-Britannique, à Vancouver. En 2018, elle a été artiste en résidence en Finlande, à Haihatus (Joutsa) et à Kemijärvi. En 2019, Eliana a été artiste résidente au Pilotenkueche International Art Program (Leipzig) en tant que lauréate du prix de développement de début de carrière du British Columbia Arts Council. Les pratiques pluridisciplinaires d'Eliana examinent la culture mémorielle au regard de l'histoire des lieux, et plaident pour la préservation de la diversité culturelle et la durabilité environnementale. Ses principaux médias sont les installations “site-specific” et la performance, par les mouvements et la musique.
          </div>
        </div>
        <div className="container__about__artist container__about__artist--sita">
          <div className="container__about__artist__name">
            Sîta
            <br/>
            Subias
          </div>
          <div className="container__about__artist__text">
            Diplômée d’un bachelor en design graphique et d’espace de l’ESADSE (Ecole supérieure d’art et de design de Saint-Etienne - France), Sîta Subias a une pratique entre design et art visuel. Elle travaille sur la production de matériaux expérimentaux bio-sourcés, par lesquels elle tente de rendre compte des processus biologiques et être vivants impliqués. À l'heure du changement climatique et de l'effacement de la frontière nature/culture, elle s'intéresse à la façon dont les humains perçoivent, comprennent et s'adaptent à leur environnement changeant.
          </div>
        </div>
      </div>
      <div className="container__about__since">
        <div className="container__about__since__background"></div>
        <div className="container__about__since__text">
          Depuis 2019, Eliana et Sîta travaillent ensemble dans le cadre du Master d’art visuel TRANS-, à la HEAD - Genève. Elles étudient le changement climatique à travers des prismes à la fois individuels et multi-culturels, mais aussi scientifiques. Le duo travaille directement avec les individus, en recueillant et publiant les témoignages de personnes qui attestent des effets du changement climatique sur les populations du monde entier.
        </div>  
      </div>
      <div className="container__about__contact">
        <div className="container__about__contact__title">
          Contact
        </div>
        <div className="container__about__contact__text">
          <div className="container__about__contact__text__name">
          Eliana Pliskin Jacobs & Sîta Subias
          </div>
          <div className="container__about__contact__text__line"></div>
          <div className="container__about__contact__text__mail">
            habiter.project@gmail.com
          </div>
        </div>
      </div>
      <div className="container__about__opencall">
        <div className="container__about__opencall__background"></div>
        <div className="container__about__opencall__wrapper">
          <div className="container__about__opencall__wrapper__title">
            <div className="container__about__opencall__wrapper__title--bold">
              Appel
            </div>
            à témoignages
          </div>
          <div className="container__about__opencall__wrapper__content">
            <OpenCall className="container__about__opencall__wrapper__content__icon" />
            <div className="container__about__opencall__wrapper__content__text">
              Si vous vivez ou que vous avez vécu certaines conséquences du changement climatique et que vous souhaitez partager votre témoignage en ligne, nous serions ravies de vous écouter. Merci de nous écrire à l'adresse :
              
              <div className="container__about__opencall__wrapper__content__text--underline">
                <a
                  href="mailto:habiter.project@gmail.com"
                >
                  habiter.project@gmail.com
                </a>
              </div>
              en décrivant brièvement votre histoire et nous vous contacterons dès que possible pour organiser un entretien à distance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheArtists;