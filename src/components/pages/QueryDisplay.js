import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../queries/SearchBar";
import Answers from "../queries/Answers";
import AuthContext from "../../context/auth/authContext";
import "./front.css";

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
      <div className='your-req'>
        <p className='para'>
          Can't find what you are looking for? <br />
          <span style={{ color: "#30336b", paddingLeft: "55px" }}>
            Let us help you!!!
          </span>
        </p>

        <button className='start1'>
          <Link to='/' className='text-size1'>
            Submit a Request
          </Link>
        </button>
      </div>
    </div>
  );
};

export default QueryDisplay;
