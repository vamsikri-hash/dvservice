import React, { useState, useContext } from "react";
import "./reg.css";
import AuthContext from "../../context/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.minimal.css";

const Register = () => {
  const authContext = useContext(AuthContext);
  // const { register, error, isAuthenticated, clearErrors } = authContext;
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
      console.log(user);
    }
  };
  return (
    <div className='container'>
      <ToastContainer />
      <form className='col s12 basic-form ' onSubmit={onSubmit}>
        <h4 className='blue-text text-darken-2 '>Signup</h4>
        <div className='row'>
          <div className='input-field col s6'>
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
          <div className='input-field col s6'>
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
            <label htmlFor='password_confirmation'>Password Confirmation</label>
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
              <a href='#'>Already, have an account login here</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
