import React, { useContext } from "react";
import AnswerContext from "../../context/answers/answerContext";
import "./answer.css";
const Answers = () => {
  const answerContext = useContext(AnswerContext);
  const { answers } = answerContext;
  const { results } = answers;

  console.log(results);

  return (
    <div className='better'>
      {results && (
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1 '>
              <div className='card-content white-text'>
                <p style={{ fontSize: "20px" }}> {results[0].faq.answer}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {results && results[0].faq.alternatives && (
        <div className='row'>
          <h4>You May be Looking for this...</h4>
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1'>
              <div className='card-content white-text'>
                <p style={{ fontSize: "20px" }}>
                  {" "}
                  {results[0].faq.alternatives[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Answers;
