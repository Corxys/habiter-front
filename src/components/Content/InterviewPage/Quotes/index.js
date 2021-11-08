// import
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// component
const Quotes = ({ quotes }) => {
  const { t } = useTranslation();

  return (
    <div className="interview-page__quotes">
      <h2 className="interview-page__quotes__title">
        {
          t('interviewPage:quotes')
        } :
      </h2>
      <div className="interview-page__quotes__resources">
        {
          quotes.map((quote, index) => {
            return (
              <div key={ index } className="interview-page__quotes__resource">
                {
                  quote.title && 
                  <div className="interview-page__quotes__resource__title">
                    { quote.title }
                  </div>
                }
                <div className="interview-page__quotes__resource__content">
                  { quote.content }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

// export
export default Quotes;