import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ARTICLE,
  CLEAR_ARTICLE_ERROR,
  ARTICLE_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.map(articleitem =>
          articleitem.id === action.payload.id ? action.payload : articleitem
        )
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          article => article.id !== action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_ARTICLE_ERROR:
      return {
        ...state,
        current: null,
        error: null
      };
    default:
      return state;
  }
};
