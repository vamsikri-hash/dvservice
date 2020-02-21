import React, { useReducer } from "react";
import axios from "axios";
import HistoryContext from "./historyContext";
import historyReducer from "./historyReducer";
import { GET_HISTORIES, ADD_HISTORIES, HISTORY_ERROR } from "../types";

const HistoryState = props => {
  const initialState = {
    histories: [],
    error: null
  };
  const [state, dispatch] = useReducer(historyReducer, initialState);

  //Get Histories
  const GetHistories = async () => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/histories",

        config
      ); //get articles url
      console.log(res.data);
      dispatch({
        type: GET_HISTORIES,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: HISTORY_ERROR,
        payload: error.response.data.message
      });
    }
  };
  //Add History
  const AddHistories = async obj => {
    const config = {
      headers: {
        "Content-Type": "Application/json"
      }
    };
    try {
      console.log(obj);
      const res = await axios.post(
        "http://localhost:3000/api/v1/histories",
        obj,
        config
      ); //post history url
      console.log(res.data);
      dispatch({
        type: ADD_HISTORIES,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: HISTORY_ERROR,
        payload: error.response.data.message
      });
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        histories: state.histories,
        error: state.error,
        AddHistories,
        GetHistories
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryState;
