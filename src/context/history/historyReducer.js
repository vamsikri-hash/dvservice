import { GET_HISTORIES, ADD_HISTORIES, HISTORY_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_HISTORIES:
      return {
        ...state,
        histories: action.payload
      };
    case ADD_HISTORIES:
      return {
        ...state,
        articles: [action.payload, ...state.histories]
      };

    case HISTORY_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
