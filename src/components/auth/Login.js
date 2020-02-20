import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./reg.css";
import AuthContext from "../../context/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";

const Login = props => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
    if (error === "Invalid credentials") {
      toast.error("Invalid Credentials");
    }
    clearErrors();
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
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
      login(user);
    }
  };
  return (
    <div className='container'>
      <ToastContainer />
      <div className='col s12 m7'>
        <div className='card horizontal medium-width card-panel hoverable'>
          <div className='card-stacked  small'>
            <div class='card-content'>
              <form className='col s12 ' onSubmit={onSubmit}>
                <h4 className='blue-text text-darken-2 mid'>Login</h4>

                <div className='row'>
                  <div className='input-field col s10'>
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
                  <div className='input-field col s10'>
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
                      <Link to='/signup'>Don't have account, create here.</Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
