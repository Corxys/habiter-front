const initialState = {
  interviews: [],
  interview: {},
};

const reducer = (oldState = initialState, action) => {
  console.log(action);

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

    default: 
      return oldState;
  };
};

export default reducer;