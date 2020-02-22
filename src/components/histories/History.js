import React, { useEffect, useContext } from "react";
import HistoryContext from "../../context/history/historyContext";
import HistoryItem from "./HistoryItem";
import "./history.css";

const History = () => {
  const historyContext = useContext(HistoryContext);
  const { histories, GetHistories } = historyContext;
  useEffect(() => {
    GetHistories();
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <p className='head-hist'>Your recent History</p>
      <div className='hist-list'>
        <ul className='collapsible'>
          {histories !== null ? (
            histories.map(historyitem => (
              <HistoryItem key={historyitem.id} historyitem={historyitem} />
            ))
          ) : (
            <h2>nothing</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default History;
