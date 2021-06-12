const initialState = {
  interviews: [],
  interview: {},
  currentPage: 1,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'GET_INTERVIEWS_SUCCESS':
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
      };
    case 'CHANGE_CURRENT_PAGE':
      return {
        ...oldState,
        currentPage: action.payload.currentPage,
      }
    default: 
      return oldState;
  };
};

export default reducer;