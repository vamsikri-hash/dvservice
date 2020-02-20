import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loaduser();
    //eslint-disable-next-line
  }, []);
  return <div>Presetn User Content Here</div>;
};
export default Home;
