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
    </div>
  );
};

export default QueryDisplay;
