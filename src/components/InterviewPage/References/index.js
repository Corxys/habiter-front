// import
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss';

// component
const References = ({ references }) => {
  const { t } = useTranslation();

  return (
    <div className="interview-page__resources">
      <h2 className="interview-page__resources__title">
        {
          t('interviewPage:references')
        } :
      </h2>
      <div className="interview-page__resources__links">
        {
          references.map((reference) => {
            return (
              <div className="interview-page__resources__link">
                <div className="interview-page__resources__link__title">
                  { reference.name }
                </div>
                <div className="interview-page__resources__link__source">
                  <a
                    href={ reference.link }
                    target="_blank"
                    rel="noreferrer"
                  >
                    { reference.link }          
                  </a>
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
export default References;