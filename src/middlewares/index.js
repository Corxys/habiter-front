import axios from 'axios';

const HOST = 'https://habiterproject.herokuapp.com';

const habiter = (store) => (next) => (action) => {
  switch (action.type) {
    case 'INIT_DATAS':
      try {
        const response = axios.get(`${HOST}/interviews`);

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
      break;
    default: 
      next(action);
  }
};

export default habiter;