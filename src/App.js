import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Home from "./components/pages/Home";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/Layouts/Navbar";
import ArticleForm from "./components/articles/ArticleForm";
import ArticleState from "./context/article/ArticleState";
import ArticleDisplay from "./components/pages/ArticlesDisplay";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // initializing materialize js
    M.AutoInit();
    //eslint-disable-next-line
  });
  return (
    <AuthState>
      <ArticleState>
        <Router>
          <Fragment>
            <Navbar />

            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/signup' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/articles' component={ArticleDisplay} />
            </Switch>
          </Fragment>
        </Router>
      </ArticleState>
    </AuthState>
  );
};

export default App;
