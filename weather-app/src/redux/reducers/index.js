const initialState = {
  cityInfo: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-CITY-INFO":
      return {
        ...state,
        cityInfo: {
          ...state.cityInfo,
          content: [...state.cityInfo.content, action.payload],
        },
      };

    // case "REMOVE_FROM_FAVOURITE":
    //   return {
    //     ...state,
    //     favourite: {
    //       ...state.favourite,
    //       content: state.favourite.content.filter((company, i) => {
    //         return i !== action.payload;
    //       }),
    //     },
    //   };

    default:
      return state;
  }
};

export default mainReducer;
