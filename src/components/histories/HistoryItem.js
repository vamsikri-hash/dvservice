import React, { useContext } from "react";
import PropTypes from "prop-types";
import HistoryContext from "../../context/history/historyContext";
import { Link } from "react-router-dom";

const HistoryItem = ({ historyitem }) => {
  const historyContext = useContext(HistoryContext);
  const {} = historyContext;

  const { id, question, created_at, updated_at } = historyitem;
  const created = new Date(created_at);
  const updated = new Date(updated_at);

  return (
    <div className='container'>
      <li className='collection-item'>{question}</li>
      {/*
      <div className='row'>
        <div className='col s12 '>
          <div className='card blue-grey lighten-1 card-panel hoverable'>
            <div className='card-content white-text'>
              <span className='card-title'>
                {question && <h3 className=''>{question}</h3>}
              </span>
      </div>
            <div className='card-action'>
              <ul className=''>
                {created_at && (
                  <li>
                    <span className=''>Created On </span>-
                    {created.toDateString()}
                  </li>
                )}
                {updated_at && (
                  <li>
                    <span className=''>Updated On </span>-{" "}
                    {updated.toDateString()}
                  </li>
                )}
              </ul>
                </div>
          </div>
        </div>
                </div>*/}
    </div>
  );
};

HistoryItem.propTypes = {
  historyitem: PropTypes.object.isRequired
};
export default HistoryItem;
