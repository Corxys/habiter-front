const initialState = {
  interview: {},
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'GET_INTERVIEW':
      return {
        ...oldState,
        interview: action.payload.interview,
      };
    default: 
      return oldState;
  };
};

export default reducer;