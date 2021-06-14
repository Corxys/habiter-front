const initialState = {
  language: '',
  showLanguages: true,
  showInformations: false,
  showTitle: false,
  paragraph: {
    showParagraphOne: false,
    showParagrapheTwo: false,
    showParagraphThree: false,
    showParagraphFour: false,
  },
  showHabiter: false,
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'INIT_DATAS_SUCCESS':
      return {
        ...oldState,
        showLanguages: action.payload.showLanguages,
        showInformations: action.payload.showInformations,
        showTitle: action.payload.showTitle,
        showHabiter: action.payload.showHabiter,
      }
    case 'HIDE_LANGUAGES':
      return {
        ...oldState,
        showLanguages: false,
        showInformations: true,
        paragraph: {
          ...oldState.paragraph, 
          showParagraphOne: true,
        },
      }
    case 'HIDE_PARAGRAPH_ONE':
      return {
        ...oldState,
        paragraph: {
          ...oldState.paragraph,
          showParagraphOne: false,
          showParagraphTwo: true,
        }
      }
    case 'HIDE_PARAGRAPH_TWO':
      return {
        ...oldState,
        paragraph: {
          ...oldState.paragraph,
          showParagraphTwo: false,
          showParagraphThree: true,
        }
      }
    case 'HIDE_PARAGRAPH_THREE':
      return {
        ...oldState,
        paragraph: {
          ...oldState.paragraph,
          showParagraphThree: false,
          showParagraphFour: true,
        }
    }
    case 'HIDE_INFORMATIONS':
      return {
        ...oldState,
        paragraph: {
          ...oldState.paragraph,
          showParagraphFour: false,
        },
        showInformations: false,
        showTitle: true,
    }
    case 'HIDE_TITLE':
      return {
        ...oldState,
        showTitle: false,
        showHabiter: true,
      }
    case 'SKIP_INTRODUCTION': 
      return {
        ...oldState,
        showLanguages: false,
        showInformations: false,
        showTitle: false,
          paragraph: {
            ...oldState.paragraph,
            showParagraphOne: false,
            showParagrapheTwo: false,
            showParagraphThree: false,
            showParagraphFour: false,
          },
        showHabiter: true,
      }
    default: 
      // instead {...oldState}
      // https://github.com/rt2zz/redux-persist/issues/1114
      return oldState;
  };
};

export default reducer;