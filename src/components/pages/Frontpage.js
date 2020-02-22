import React from "react";
import { Link } from "react-router-dom";
import mylogo from "../../mylogo.svg";
import "./front.css";

const Frontpage = () => {
  return (
    <div>
      <div className='front'>
        <div className='setimg'>
          <img alt='Pupilfirst hero' src={mylogo}></img>
        </div>
        <div className='content'>
          <p className='tag-head'>Genesys Clears You</p>
          <p className='tag-head2'>Through Our Service</p>
          <button className='start'>
            <Link to='/signup' className='text-size'>
              Get Started
            </Link>
          </button>
        </div>
      </div>
      <div className='content-2'>
        <p className='para'>We provide you service through different domains</p>
      </div>
    </div>
  );
};

export default Frontpage;
