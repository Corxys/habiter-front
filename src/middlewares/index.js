import axios from 'axios';

const HOST = 'https://habiterproject.herokuapp.com';

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

          // handle success
          store.dispatch({
            type: 'GET_INTERVIEWS_SUCCESS',
            payload: {
              interviews: interviews,
            },
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
      break;
    default: 
      next(action);
  }
};

export default habiter;