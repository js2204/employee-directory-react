import { useState } from "react";
import "./App.css";

import EmployeeCard from "./assets/EmployeeCard";
import SearchBar from "./assets/SearchBar";
import DepartmentFilter from "./assets/DepartmentFilter";
import Navbar from "./assets/Navbar";
import Stats from "./assets/Stats";
import Footer from "./assets/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const employees = [
    {
      id: 1,
      name: "Jeya Sri",
      designation: "Full Stack Developer",
      department: "IT",
      email: "jeyasri971@gmail.com",
    },
    {
      id: 2,
      name: "Sukiraam",
      designation: "UI Designer",
      department: "Design",
      email: "sukiraam@gmail.com",
    },
    {
      id: 3,
      name: "Rohit",
      designation: "HR Manager",
      department: "HR",
      email: "rohit@gmail.com",
    },
    {
      id: 4,
      name: "Rishimitha",
      designation: "React Developer",
      department: "IT",
      email: "rishimitha@gmail.com",
    },
    {
      id: 5,
      name: "Dharunika",
      designation: "Marketing Lead",
      department: "Marketing",
      email: "dharunika@gmail.com",
    },
    {
      id: 6,
      name: "Sanjay",
      designation: "Backend Developer",
      department: "IT",
      email: "sanjay@gmail.com",
    },
    {
      id: 7,
      name: "Divya",
      designation: "Graphic Designer",
      department: "Design",
      email: "divya@gmail.com",
    },
    {
      id: 8,
      name: "Rithick",
      designation: "HR Executive",
      department: "HR",
      email: "rithick@gmail.com",
    },
    {
      id: 9,
      name: "Vishaal",
      designation: "Software Engineer",
      department: "IT",
      email: "vishaal@gmail.com",
    },
    {
      id: 10,
      name: "Sanjeev",
      designation: "Marketing Executive",
      department: "Marketing",
      email: "sanjeev@gmail.com",
    },
  ];

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <>
      <Navbar />

      <div className="header">
        <h1>Employee Directory</h1>
        <p>Manage and Search Employees</p>
      </div>

      <Stats total={filteredEmployees.length} />

      <div className="filter-section">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <DepartmentFilter
          department={department}
          setDepartment={setDepartment}
        />
      </div>

      <div className="employee-list">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              designation={employee.designation}
              department={employee.department}
              email={employee.email}
            />
          ))
        ) : (
          <h2>No Employees Found</h2>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;