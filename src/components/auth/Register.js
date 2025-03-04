import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./reg.css";
import AuthContext from "../../context/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";

const Register = props => {
  const authContext = useContext(AuthContext);
  const { register, error, isAuthenticated, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/search");
    }
    if (error === "Validation failed: Email has already been taken") {
      toast.error("This email is already registered.");
    }
    clearErrors();
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { name, email, password, password_confirmation } = user;

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.error("empty credentials not allowed");
    } else if (password !== password_confirmation) {
      alert();
    } else {
      register(user);
    }
  };
  return (
    <div className='container'>
      <ToastContainer />

      <div className='col s12 m7'>
        <div className='card horizontal medium-width card-panel hoverable'>
          <div className='card-stacked  small'>
            <div class='card-content'>
              <form className='col s12  ' onSubmit={onSubmit}>
                <h4 className='blue-text text-darken-2 mid'>Signup</h4>
                <div className='row'>
                  <div className='input-field col s10'>
                    <i className='material-icons prefix'>account_circle</i>
                    <input
                      id='icon_prefix'
                      type='text'
                      name='name'
                      value={name}
                      onChange={onChange}
                    />

                    <label htmlFor='icon_prefix' className='active'>
                      Name
                    </label>
                  </div>
                </div>
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
                  <div className='input-field col s10'>
                    <i className='material-icons prefix'>vpn_key</i>
                    <input
                      id='password_confirmation'
                      type='password'
                      name='password_confirmation'
                      className='validate'
                      minLength='6'
                      value={password_confirmation}
                      onChange={onChange}
                    />
                    <label htmlFor='password_confirmation'>
                      Password Confirmation
                    </label>
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
                      value='Signup'
                      name='action'
                      className='btn waves-effect waves-light'
                      style={{ marginLeft: "50px" }}
                    />
                    <span style={{ marginLeft: "50px" }}>
                      <Link to='/login'>
                        Already, have an account login here
                      </Link>
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

export default Register;
