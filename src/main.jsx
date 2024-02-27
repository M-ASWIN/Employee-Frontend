
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeForm from "./Employee";
import view from "./view";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={EmployeeForm} />
        <Route path="/view" component={view} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
