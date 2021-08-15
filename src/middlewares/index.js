import axios from 'axios';

import backgroundIntroVideo from '../assets/videos/introduction-background.mp4';

const HOST = 'https://habiterproject.herokuapp.com';

const randomPadding = () => {
  return Math.floor(Math.random() * (100 - 0)) + 0;
};

const habiter = (store) => (next) => (action) => {
  switch (action.type) {
    case 'INIT_DATAS':
      store.dispatch({
        type: 'INIT_DATAS_SUCCESS',
        payload: {
          showLanguages: true,
          showInformations: false,
          showTitle: false,
          showHabiter: false,
          backgroundIntroVideo: backgroundIntroVideo,
        }
      });

      axios.get(`${HOST}/interviews`)
        .then((response) => {
          const interviews = response.data.sort((a, b) => {
            if (a.author < b.author) {
              return -1;
            } 
            if (a.author > b.author) {
              return 1;
            }

            return 0;
          });

          // we declare a reference variable, which will allow us to decide
          // if we want the component to be used Interview, or InterviewInvert
          let reference = 0;

          const interviewsStylized = interviews.map((interview) => {
            interview.random_padding = randomPadding();

            if (reference === 0) {
              interview.position = reference;
              reference++;
            } else if (reference === 1) {
              interview.position = reference;
              reference = 0;
            }

            return interview;
          });

          // handle success
          store.dispatch({
            type: 'GET_INTERVIEWS_SUCCESS',
            payload: {
              interviews: interviewsStylized,
            },
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })

        axios.get(`${HOST}/references`)
          .then((response) => {
            store.dispatch({
              type: 'GET_REFERENCES_SUCCESS',
              payload: {
                references: response.data,
              },
            });
          })
          .catch((error) => {
            console.log(error);
          })
      break;
    default: 
      next(action);
  }
};

export default habiter;