import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
function EmployeeForm() {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    emp_id: "",
    department: "",
    dob: "",
    doj: "",
    gender: "",
    designation: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://employee-backend-1.onrender.com/api/employees", employeeData)
      .then(() => {
        alert("Employee data submitted successfully!");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <a>
            Emplo<a className="span">yeeHub</a>
          </a>
        </div>
      </nav>
      <form className="employee-form" onSubmit={handleSubmit}>
        <h3 className="h3">Employee Management System</h3>

        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          value={employeeData.name}
          onChange={handleChange}
          placeholder="Employee Name"
          maxLength={50}
          required
        />
        <label>Employee ID:</label>
        <input
          type="text"
          name="emp_id"
          value={employeeData.emp_id}
          onChange={handleChange}
          placeholder="Employee ID"
          required
        />
        <label>Department:</label>
        <select
          name="department"
          value={employeeData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="Sales">SALES</option>
          <option value="Marketing">MARKETING</option>
        </select>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={employeeData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <label>Date of Join:</label>
        <input
          type="date"
          name="doj"
          value={employeeData.doj}
          onChange={handleChange}
          placeholder="Date of Joining"
          required
        />
        <label>Gender:</label>
        <div className="radio-buttons">
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />{" "}
          Female
        </div>
        <label>Designation:</label>
        <select
          name="designation"
          value={employeeData.designation}
          onChange={handleChange}
          required
        >
          <option value="">Select Designation</option>
          <option value="Manager">MANAGER</option>
          <option value="Employee">EMPLOYEE</option>
        </select>
        <label>Total Salary:</label>
        <input
          type="number"
          name="salary"
          value={employeeData.salary}
          onChange={handleChange}
          placeholder="Salary"
          maxLength={8}
          required
        />
        <button type="submit">Submit</button>
        <Link to="/view">
          <button>View</button>
        </Link>
      </form>
    </>
  );
}

export default EmployeeForm;
