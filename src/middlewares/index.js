import axios from 'axios';

const HOST = 'https://habiterproject.herokuapp.com';

const habiter = (store) => (next) => (action) => {
  switch (action.type) {
    case 'INIT_DATAS':
      let showLanguages = true;
      let showInformations = false;
      let showTitle = false;
      let showHabiter = false;

      store.dispatch({
        type: 'INIT_DATAS_SUCCESS',
        payload: {
          showLanguages: showLanguages,
          showInformations: showInformations,
          showTitle: showTitle,
          showHabiter: showHabiter,
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
            type: 'INIT_DATAS_SUCCESS',
            payload: {
              interviews: interviews,
              showLanguages: showLanguages,
              showInformations: showInformations,
              showTitle: showTitle,
              showHabiter: showHabiter,
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