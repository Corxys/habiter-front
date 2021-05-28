const initialState = {
  interviews: [],
  interview: {},
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'INTERVIEWS_SUCCESS':
      return {
        ...oldState,
        interviews: action.payload.interviews,
      };
    case 'INTERVIEW_SUCCESS':
      return {
        ...oldState,
        interview: action.payload.interview,
      };
    default: 
      return oldState;
  };
};

export default reducer;