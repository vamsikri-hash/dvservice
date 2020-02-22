import React, { useEffect, useContext } from "react";
import axios from "axios";
import "./chat.css";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "./cs.png";

const Chat = () => {
  useEffect(() => {
    addResponseMessage("Hii, How can I help you?");
  });

  const handleNewUserMessage = async newMessage => {
    console.log(`New message incoming! `);

    const objj = {
      query: newMessage,
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

      addResponseMessage(res.data.results[0].faq.answer);
    } catch (error) {
      console.log(1);
    }
  };
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title='We Will Help You'
        subtitle='Feel Free to Ask'
      />
    </div>
  );
};
export default Chat;
