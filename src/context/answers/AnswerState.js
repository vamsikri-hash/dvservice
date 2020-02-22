import React, { useReducer, useContext } from "react";
import axios from "axios";
import AnswerContext from "./answerContext";
import answerReducer from "./answerReducer";
import HistoryContext from "../history/historyContext";
import {
  SEARCH_ANSWERS,
  CLEAR_ANSWERS,
  ANSWER_ERROR,
  SET_LOADING
} from "../types";

const AnswerState = props => {
  const historyContext = useContext(HistoryContext);
  const initialState = {
    answers: [],
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(answerReducer, initialState);
  //serach all
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
          "Bearer vmcG0Sg_-nh5UzGesra_KGnOSZiqw3MlcZgc02RgyDRi8myqGu29gc1_ORjInvuOETjHMDwoxGhSw_UiI4bJsw"
      }
    }; // use auth bearer token here to access
    // knwbid-1 e88a9db4-1c03-42f9-a7fb-bc2b59aa4aab
    try {
      const res = await axios.post(
        `https://api.mypurecloud.com/api/v2/knowledge/knowledgebases/d4dcf543-6aae-442d-b1b7-ea181cfb0807/search`,
        objj,
        config
      ); //get search url
      console.log(res);
      const ans = res.data.results[0].faq.answer;
      console.log(ans);
      //localStorage.setItem("noteid", res.data.results[0].faq.answer);
      historyContext.AddHistories({ text, ans });
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
