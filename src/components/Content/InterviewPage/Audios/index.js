// import
import React from 'react';
import { useTranslation } from 'react-i18next';

// styles
import './styles.scss'

// components imports
import AudioPlayer from './AudioPlayer';

// component
const Audios = ({ audios }) => {
  const { t } = useTranslation();

  return (
    <div className="interview-page__audios">
      <h2 className="interview-page__audios__title">
        {
          t('interviewPage:audios')
        } :
      </h2>
      <div className="interview-page__audios__files">
        {
          audios.map((file) => {
            return (
              <AudioPlayer
                key={ file.id }
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
};

// export
export default Audios;