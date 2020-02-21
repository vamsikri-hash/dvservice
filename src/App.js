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
import ArticleState from "./context/article/ArticleState";
import ArticleDisplay from "./components/pages/ArticlesDisplay";
import HistoryDisplay from "./components/pages/HistoryDisplay";
import HistoryState from "./context/history/HistoryState";
import QueryDisplay from "./components/pages/QueryDisplay";

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
        <HistoryState>
          <Router>
            <Fragment>
              <Navbar />

              <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/signup' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/articles' component={ArticleDisplay} />
                <Route exact path='/history' component={HistoryDisplay} />
                <Route exact path='/search' component={QueryDisplay} />
              </Switch>
            </Fragment>
          </Router>
        </HistoryState>
      </ArticleState>
    </AuthState>
  );
};

export default App;
