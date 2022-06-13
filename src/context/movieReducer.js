export const reducer = (state, action) => {
  switch (action.type) {
    case "TOP_MOVIES":
      return {
        ...state,
        topMovies: [...state.topMovies, [...action.payload]],
      };

    default:
      break;
  }
};
