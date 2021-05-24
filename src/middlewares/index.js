import axios from 'axios';

const HOST = 'https://habiter-back.herokuapp.com';

const habiter = (store) => (next) => (action) => {
  switch (action.type) {
    case 'INIT_DATAS':
      (async () => {
        try {
          const response = await axios.get(`${HOST}/interviews`);
          console.log(response.data);

          store.dispatch({
            type: 'INTERVIEWS_SUCCESS',
            payload: {
              interviews: response.data,
            },
          });
        }
        catch (error) {
          console.log(error);
        }
      })()
    break;
    default: 
      next(action);
  }
};

export default habiter;