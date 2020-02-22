import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import HistoryContext from "../../context/history/historyContext";

const HistoryItem = ({ historyitem }) => {
  const historyContext = useContext(HistoryContext);
  const {} = historyContext;
  console.log(historyitem);

  const { id, question, answer } = historyitem;

  return (
    <Fragment>
      <li>
        <div className='collapsible-header'>
          <span className='ques'> {question}</span>
        </div>
        <div className='collapsible-body ans'>
          <span>{answer}</span>
        </div>
      </li>
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
    </Fragment>
  );
};

HistoryItem.propTypes = {
  historyitem: PropTypes.object.isRequired
};
export default HistoryItem;
