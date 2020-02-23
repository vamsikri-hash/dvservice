import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import ArticleForm from "../articles/ArticleForm";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <ArticleForm />
    </div>
  );
};
export default Home;
