const initialState = {
  interviews: [],
  loaded: undefined,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'GET_INTERVIEWS_SUCCESS':
      return {
        ...oldState,
        interviews: action.payload.interviews,
        loaded: true,
      };
    default: 
      return oldState;
  };
};

export default reducer;