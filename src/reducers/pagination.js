const initialState = {
  currentPage: 1,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
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