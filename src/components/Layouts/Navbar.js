import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };
  const authlinks = (
    <Fragment>
      <ul className='right hide-on-med-and-down'>
        <li>
          <a onClick={onLogout} href='/' className='large'>
            Logout
          </a>
        </li>
      </ul>
    </Fragment>
  );

  const guestlinks = (
    <Fragment>
      <ul className='right hide-on-med-and-down'>
        <li>
          <Link to='/' className='large'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/signup' className='large'>
            Signup
          </Link>
        </li>
        <li>
          <Link to='/login' className='large'>
            Login
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <div>
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>
            Logo
          </a>

          <ul>{isAuthenticated ? authlinks : guestlinks}</ul>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "DV Customer Service"
};
export default Navbar;
