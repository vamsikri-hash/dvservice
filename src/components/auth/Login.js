import React, { useState, useContext } from "react";
import "./reg.css";
import AuthContext from "../../context/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";

const Login = () => {
  const authContext = useContext(AuthContext);
  // const { register, error, isAuthenticated, clearErrors } = authContext;
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { email, password } = user;

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("empty credentials not allowed");
    } else {
      console.log(user);
    }
  };
  return (
    <div className='container'>
      <ToastContainer />
      <form className='col s12 basic-form ' onSubmit={onSubmit}>
        <h4 className='blue-text text-darken-2 '>Login</h4>

        <div className='row'>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>email</i>
            <input
              id='email'
              type='email'
              name='email'
              className='validate'
              value={email}
              onChange={onChange}
            />
            <label htmlFor='email'>Email</label>
            <span
              className='helper-text'
              data-error='wrong'
              data-success='right'
            >
              example: abc@def.com
            </span>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <i className='material-icons prefix'>vpn_key</i>
            <input
              id='password'
              type='password'
              name='password'
              className='validate'
              minLength='6'
              value={password}
              onChange={onChange}
            />
            <label htmlFor='password'>Password</label>
            <span
              className='helper-text'
              data-error='wrong'
              data-success='right'
            >
              minimum 6 charcters
            </span>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='submit'
              value='Login'
              name='action'
              className='btn waves-effect waves-light'
              style={{ marginLeft: "50px" }}
            />
            <span style={{ marginLeft: "50px" }}>
              <a href='#'>Don't have account, create here.</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
