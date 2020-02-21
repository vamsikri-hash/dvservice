import React, { useContext } from "react";
import AnswerContext from "../../context/answers/answerContext";
const Answers = () => {
  const answerContext = useContext(AnswerContext);
  const { answers } = answerContext;
  const { total, results } = answers;

  console.log(results);

  return <div>{results && results[0].faq.answer}</div>;
};

export default Answers;
