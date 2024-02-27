// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import EmployeeForm from './Employee.jsx'
// import View from './view.jsx';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<EmployeeForm />} />
//         <Route path="/view" element={<View />}/>
//       </Routes>
//     </Router>
//   );
// }
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// main.jsx

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
