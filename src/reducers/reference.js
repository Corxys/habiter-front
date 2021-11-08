const initialState = {
  references: {},
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'GET_REFERENCES_SUCCESS':
      return {
        ...oldState,
        references: action.payload.references,
      };
    default: 
      return oldState;
  };
};

export default reducer;