const initialState = {
  favourite: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: [...state.favourite.content, action.payload],
          //   content: state.favourite.content.filter((company, payload) =>{
          //     return state.favourite.content.indexOf(company) === payload;
          //   }),
        },
      };

    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: state.favourite.content.filter((company, i) => {
            return i !== action.payload;
          }),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
