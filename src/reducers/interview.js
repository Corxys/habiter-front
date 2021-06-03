const initialState = {
  interviews: [],
  interview: {},
  langue: 'fr',
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'INTERVIEWS_SUCCESS':
      return {
        ...oldState,
        interviews: action.payload.interviews,
      };
    case 'GET_INTERVIEW':
      const interview = oldState.interviews.find((interview) => {
        return interview.id === action.payload.id;
      });

      return {
        ...oldState,
        interview: interview,
      }
    case 'CHANGE_LANGUE':
      return {
        ...oldState,
        langue: action.payload.langue,
      }
    default: 
      return oldState;
  };
};

export default reducer;