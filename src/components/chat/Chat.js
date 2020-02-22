import React, { useEffect, useContext } from "react";
import {
  Widget,
  addResponseMessage,
  renderCustomComponent
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import AnswerContext from "../../context/answers/answerContext";
import Answers from "../queries/Answers";

const Chat = () => {
  const answerContext = useContext(AnswerContext);
  const { answers } = answerContext;
  const { total, results } = answers;
  if (results !== undefined) {
    var as = results[0].faq.answers;
  }

  const ans = "hii";
  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! `);
    //var s=search(newMessage)
    answerContext.searchAnswers(newMessage);
    console.log(as);

    var so = localStorage.getItem("noteid");
    addResponseMessage(so);
    const t = Answers;
    //renderCustomComponent(t);
  };
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title='Your Questions Answered'
        subtitle='Hello'
      />
    </div>
  );
};
export default Chat;
