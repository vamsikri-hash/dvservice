import {
  SEARCH_ANSWERS,
  CLEAR_ANSWERS,
  ANSWER_ERROR,
  SET_LOADING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ANSWERS:
      return {
        ...state,
        answers: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_ANSWERS:
      return {
        ...state,
        answers: [],
        loading: false
      };
    case ANSWER_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
