import React, { useReducer } from "react";
import axios from "axios";
import AnswerContext from "./answerContext";
import answerReducer from "./answerReducer";
import {
  SEARCH_ANSWERS,
  CLEAR_ANSWERS,
  ANSWER_ERROR,
  SET_LOADING
} from "../types";

const AnswerState = props => {
  const initialState = {
    answers: [],
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(answerReducer, initialState);
  //serach all users particular key word in github managment
  const searchAnswers = async text => {
    setLoading();
    console.log(text);
    const objj = {
      query: text,
      pageSize: 4,
      pageNumber: 1,
      languageCode: "en-US",
      documentType: "Faq",
      searchOnDraftDocuments: "True"
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 3kzpQzdyJp4aI3kkeajpza4T2AAHujT36IjsWkh7JyMmIrPo-DBo8K3vilU0GZBXPhurryU9DlH9GWkpqZDgjw"
      }
    }; // use auth bearer token here to access
    try {
      const res = await axios.post(
        `https://api.mypurecloud.com/api/v2/knowledge/knowledgebases/e88a9db4-1c03-42f9-a7fb-bc2b59aa4aab/search`,
        objj,
        config
      ); //get search url
      console.log(res);
      console.log(res.data.results[0].faq.answer);
      dispatch({
        type: SEARCH_ANSWERS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: ANSWER_ERROR,
        payload: error.data
      });
    }
  };
  const clearAnswers = () => {
    dispatch({ type: CLEAR_ANSWERS });
  };
  //set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <AnswerContext.Provider
      value={{
        answers: state.answers,
        loading: state.loading,
        searchAnswers,
        clearAnswers
      }}
    >
      {props.children}
    </AnswerContext.Provider>
  );
};

export default AnswerState;
