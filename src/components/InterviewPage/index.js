import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import AudioPlayer from './AudioPlayer';
// import { OneMedia } from './Media';

let reference = 0;

const InterviewPage = ({ interview }) => {
  const [legendDisplayed, setLegendDisplayed] = useState('interview-page__header__intro__image__legend');

  console.log('interview :', interview);

  const randomWidth = () => {
    return Math.floor(Math.random() * (1050 - 750)) + 750;
  };

  const randomPadding = () => {
    return Math.floor(Math.random() * (150 - 0)) + 0;
  };

  return (
    <div className="interview-page">
      {/* HEADER - START */}
      <div className="interview-page__header">
        {/* INTRODUCTION => name, location, image */}
        <div className="interview-page__header__intro">
          <div className="interview-page__header__intro__author">
            <h1 className="interview-page__header__intro__author__name">
              { interview.author }
            </h1>
            <div className="interview-page__header__intro__author__location">
              { interview.location }
            </div>
          </div>          
          { interview.media.length >= 1 &&
            <div
              className="interview-page__header__intro__image"
            >
              <div 
                className="interview-page__header__intro__image__legend"
              >
                Crédit photo : { interview.media_copyright }
              </div>
              <img src={ interview.media[0].source[0].url } alt="" />
            </div>
          }
        </div>
        <p className="interview-page__header__text">
          { interview.text }
        </p>
      </div>
      {/* HEADER - END */}

      {/* IMAGES - START */}
      { interview.media.length >= 1 &&
        <div
          className="interview-page__content"
        >
          {
            // eslint-disable-next-line array-callback-return
            interview.media.map((image, index) => {
              console.log(image.source[0].ext);
              if (index === 0) {
                return null;
              } else if (index !== 0) {
                if (reference === 0) {
                  reference += 1;
                  if (image.source[0].ext === '.jpg') {
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginLeft: randomPadding() }}
                      >
                        <img
                          className="interview-page__content__media__source"
                          src={ image.source[0].url }
                          alt=""
                          style={{ width: randomWidth() }}
                        />
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                      </div>
                    )
                  } else if (image.source[0].ext === '.mp4') {
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginLeft: randomPadding() }}
                      >
                        <video>
                          <source
                            src={ image.source[0].url }
                            type='video/mp4'
                          />
                        </video>
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                      </div>
                    )
                  }
                }
                else if (reference === 1) {
                  reference = 0;
                  if (image.source[0].ext === '.jpg') {
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginRight: randomPadding() }}
                      >
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                        <img
                          className="interview-page__content__media__source"
                          src={ image.source[0].url }
                          alt=""
                          style={{ width: randomWidth() }}
                        />
                      </div>
                    )
                  } else if (image.source[0].ext === '.mp4') {
                    return (
                      <div
                        className="interview-page__content__media"
                        style={{ marginRight: randomPadding() }}
                      >
                        <div className="interview-page__content__media__quote">
                          { image.caption }
                        </div>
                        <video>
                          <source
                            src={ image.source[0].url }
                            type='video/mp4'
                          />
                        </video>
                      </div>
                    )
                  }
                }
              }
            })
          }
        </div>
      }
      {/* IMAGES - END */}

      {/* AUDIO - START */}
      {
        interview.audio.length >= 1 &&
        ( 
          <div className="interview-page__audio">
            <h2 className="interview-page__audio__title">
              Citations sonores :
            </h2>
            <div className="interview-page__audio__files">
              {
                interview.audio.map((file) => {
                  return (
                    <AudioPlayer
                      id={ file.id }
                      caption={ file.caption }
                      source={ file.source }
                    />
                  )
                })
              }
            </div>
          </div>
        )
      }
      {/* AUDIO - END */}

      {/* RESSOURCES - START */}
      {
        interview.reference.length >= 1 &&
        (
          <div className="interview-page__ressources">
            <h2 className="interview-page__ressources__title">
              Ressources :
            </h2>
            <div className="interview-page__ressources__links">
              {
                interview.reference.map((ref) => {
                  return (
                    <div className="interview-page__ressources__link">
                      <div className="interview-page__ressources__link__title">
                        { ref.name }
                      </div>
                      <div className="interview-page__ressources__link__source">
                        <a
                          href={ ref.link }
                          target="_blank"
                          rel="noreferrer"
                        >
                          { ref.link }          
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
      {/* RESSOURCES - END */}
    </div>
  )
};

const mapStateToProps = (state) => ({
  interview: state.interview.interview,
});

export default connect(mapStateToProps, null)(InterviewPage);