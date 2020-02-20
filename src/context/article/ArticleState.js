import React, { useReducer } from "react";
import axios from "axios";
import ArticleContext from "./articleContext";
import articleReducer from "./articleReducer";
import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ARTICLE,
  ARTICLE_ERROR,
  CLEAR_ARTICLE_ERROR
} from "../types";

const ArticleState = props => {
  const initialState = {
    articles: [],
    current: null,
    error: null
  };
  const [state, dispatch] = useReducer(articleReducer, initialState);

  //Get Articles
  const GetArticles = async () => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/articles",

        config
      ); //get articles url
      console.log(res.data);
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ARTICLE_ERROR,
        payload: error.response.data.message
      });
    }
  };
  //Add Article
  const AddArticle = async obj => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      console.log(obj);
      const res = await axios.post(
        "http://localhost:3000/api/v1/articles",
        obj,
        config
      ); //post article url
      console.log(res.data);
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ARTICLE_ERROR,
        payload: error.response.data.message
      });
    }
  };

  //Update Article
  const UpdateArticle = async obj => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      const res = await axios.put(``, obj, config); //update article url

      dispatch({
        type: UPDATE_ARTICLE,
        payload: res.data
      });
      console.log(state.Articles);
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ARTICLE_ERROR,
        payload: error.response.data.message
      });
    }
  };
  //Delete Article

  const DeleteArticle = async id => {
    try {
      await axios.delete(``); //delete article url
      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: ARTICLE_ERROR,
        payload: error.response.data
      });
    }
  };

  //setCurrent
  const setCurrent = article => {
    dispatch({
      type: SET_CURRENT,
      payload: article
    });
  };
  //Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //clear Article Error
  const clearArticleError = () => {
    dispatch({ type: CLEAR_ARTICLE_ERROR });
  };
  //Clear Articles

  return (
    <ArticleContext.Provider
      value={{
        articles: state.articles,
        current: state.current,
        error: state.error,
        AddArticle,
        GetArticles,
        UpdateArticle,
        DeleteArticle,
        setCurrent,
        clearCurrent,
        clearArticleError
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleState;
