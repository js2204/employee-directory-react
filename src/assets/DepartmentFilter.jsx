function DepartmentFilter({
  department,
  setDepartment,
}) {
  return (
    <select
      value={department}
      onChange={(e) =>
        setDepartment(e.target.value)
      }
      className="department-filter"
    >
      <option value="All">
        All Departments
      </option>

      <option value="IT">
        IT
      </option>

      <option value="HR">
        HR
      </option>

      <option value="Marketing">
        Marketing
      </option>

      <option value="Design">
        Design
      </option>
    </select>
  );
}

export default DepartmentFilter;