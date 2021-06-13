// import
import React from 'react';

// styles
import './styles.scss';

// component
const Header = ({ interview }) => {
  console.log(interview);

  return (
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
          {
            interview.translated_from &&
            <div className="interview-page__header__intro__author__translated-from">
              { interview.translated_from }
            </div>
          }
        </div>          
        { interview.miniature &&
          <div
            className="interview-page__header__intro__image"
          >
            <div 
              className="interview-page__header__intro__image__legend"
            >
              Crédit photo : { interview.media_copyright }
            </div>
            <img src={ interview.miniature.url } alt="" />
          </div>
        }
      </div>
      {
        interview.text &&
        <p className="interview-page__header__text">
          { interview.text }
        </p>
      }
      {
        interview.text_one_column &&
        <p className="interview-page__header__text--one-column">
          { interview.text_one_column }
        </p>
      }
      {
        interview.text_two_columns &&
        <div className="interview-page__header__text--two-columns">
          {
            <>
              <p className="interview-page__header__text--two-columns__column">
                {
                  interview.text_two_columns.column_one
                }
              </p>
              <p className="interview-page__header__text--two-columns__column">
                {
                  interview.text_two_columns.column_two
                }
              </p>
            </>
          }
        </div>
      }
      
    </div>
  )
};

// export
export default Header;