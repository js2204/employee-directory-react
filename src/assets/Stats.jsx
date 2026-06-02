function Stats({ total }) {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>{total}</h3>
        <p>Total Employees</p>
      </div>

      <div className="stat-card">
        <h3>IT</h3>
        <p>Department</p>
      </div>

      <div className="stat-card">
        <h3>HR</h3>
        <p>Department</p>
      </div>

      <div className="stat-card">
        <h3>Marketing</h3>
        <p>Department</p>
      </div>
    </div>
  );
}

export default Stats;