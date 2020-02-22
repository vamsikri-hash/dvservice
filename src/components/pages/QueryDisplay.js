import React, { useEffect, useContext } from "react";
import SearchBar from "../queries/SearchBar";
import Answers from "../queries/Answers";
import AuthContext from "../../context/auth/authContext";

const QueryDisplay = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <SearchBar />
      <Answers />
      <div>
        <p>Cant find what you are looking for?</p>
        <p>Let us help you!!!</p>
        <button>
          <a href='#'>Submit a Request</a>
        </button>
      </div>
    </div>
  );
};

export default QueryDisplay;
