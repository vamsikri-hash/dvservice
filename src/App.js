import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // initializing materialize js
    M.AutoInit();

    //eslint-disable-next-line
  });
  return <div className='App'>GEt STarting</div>;
};

export default App;
