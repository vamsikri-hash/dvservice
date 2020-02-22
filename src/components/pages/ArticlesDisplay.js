import React, { useContext, useEffect } from "react";
import Articles from "../articles/Articles";
import AuthContext from "../../context/auth/authContext";

const ArticlesDisplay = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Articles />
    </div>
  );
};

export default ArticlesDisplay;
