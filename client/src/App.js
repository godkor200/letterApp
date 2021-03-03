import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/Login";
import LetterEntry from "./component/LetterEntry";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/letters_clients" component={Login} />
        <Route exact path="/Letter" component={LetterEntry} />
      </Router>
    </div>
  );
};

export default App;
