const initialState = {
  currentPage: 1,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      const nextPage = action.payload.currentPage + 1;

      return {
        ...oldState,
        currentPage: nextPage,
      }
    case 'PREVIOUS_PAGE':
      const previousPage = action.payload.currentPage - 1;

      return {
        ...oldState,
        currentPage: previousPage,
      }
    default: 
      return oldState;
  };
};

export default reducer;