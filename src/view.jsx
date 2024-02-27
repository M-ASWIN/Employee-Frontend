import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const View = () => {
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("emp_id");
  const employeesPerPage = 5;

  const getemployee = () => {
    axios
      .get("https://employee-backend-1.onrender.com/employee")
      .then((result) => {
        if (result.data.Status) {
          setData(result.data.Result);
        } else console.log(result.data.Error);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete("https://employee-backend-1.onrender.com/delete_employee/" + id)
      .then((result) => {
        if (result.data.Status) {
          getemployee();
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getemployee();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleColumnChange = (e) => {
    setSelectedColumn(e.target.value);
  };

  const filteredEmployees = data.filter((employee) =>
    employee[selectedColumn].toLowerCase().includes(filter.toLowerCase())
  );
  const startIndex2 = (currentPage - 1) * employeesPerPage;
  const endIndex2 = Math.min(
    startIndex2 + employeesPerPage,
    filteredEmployees.length
  );
  const displayedEmployees2 = filteredEmployees.slice(startIndex2, endIndex2);

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">
            Emplo<a className="span">yeeHub</a>
          </Link>
        </div>
      </nav>
      <p className="ptag">
        Explore Our Dynamic <span>Employee Database ......</span>
      </p>
      <div className="main-outer">
        <input
          type="text"
          placeholder={"Filter By " + selectedColumn}
          value={filter}
          onChange={handleFilterChange}
        />
        <select value={selectedColumn} onChange={handleColumnChange}>
          <option value="emp_id">Employee ID</option>
          <option value="name">Name</option>
          <option value="department">Department</option>
          <option value="dob">DOB</option>
          <option value="doj">DOJ</option>
          <option value="gender">Gender</option>
          <option value="designation">Designation</option>
        </select>

        <Link to="/">
          <button className="add-button">Add Books</button>
        </Link>
      </div>
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>Employee-Id</th>
              <th>Name</th>
              <th>Department</th>
              <th>DOB</th>
              <th>DOJ</th>
              <th>Gender</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {displayedEmployees2.map((e, index) => (
              <tr key={index}>
                <td>{e.emp_id}</td>
                <td>{e.name}</td>
                <td>{e.department}</td>

                <td>{e.dob}</td>
                <td>{e.doj}</td>

                <td>{e.gender}</td>
                <td>{e.designation}</td>
                <td>{e.salary}</td>
                <td>
                  <button onClick={() => handleDelete(e.emp_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(data.length / employeesPerPage))
              )
            }
            disabled={currentPage === Math.ceil(data.length / employeesPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default View;
