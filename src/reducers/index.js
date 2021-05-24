const initialState = {
  interviews: [],
};

const reducer = (oldState = initialState, action) => {
  console.log('State :', oldState);

  switch (action.type) {
    case 'INTERVIEWS_SUCCESS':
      return {
        ...oldState,
        interviews: action.payload.interviews,
      };
    default: 
      return {
        ...oldState,
      };
  };
};

export default reducer;