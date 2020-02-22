import React from "react";
import { Link } from "react-router-dom";
import mylogo from "../../mylogo.svg";
import "./front.css";
import svlog from "./doc2.svg";
const Frontpage = () => {
  return (
    <div>
      <div className='front'>
        <div className='setimg'>
          <img alt='pic' src={mylogo}></img>
        </div>
        <div className='content'>
          <p className='tag-head'>Genesys Clarifies You</p>
          <p className='tag-head2'>Through Our Service</p>
          <button className='start'>
            <Link to='/signup' className='text-size'>
              Get Started
            </Link>
          </button>
        </div>
      </div>
      <div className='front'>
        <div className='content-2'>
          <div></div>
          <p className='para'>
            We provide you service through different domains like Education,
            Banking Services using Genesys AI based API's to provide customer
            satisfaction and also optimize customer time and effectiveness.
          </p>
        </div>
        <div className='setimg1'>
          <img alt='pic' src={svlog}></img>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
