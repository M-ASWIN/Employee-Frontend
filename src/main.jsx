import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeForm from "./Employee";
import View from "./view";
import Login from "./login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
