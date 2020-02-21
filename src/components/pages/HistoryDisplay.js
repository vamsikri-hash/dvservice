import React, { useContext, useEffect } from "react";
import History from "../histories/History";
import AuthContext from "../../context/auth/authContext";

const HistoryDisplay = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <History />
    </div>
  );
};

export default HistoryDisplay;
