function EmployeeCard({
  name,
  designation,
  department,
  email,
}) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="employee-card">
      <div className="avatar">
        {initials}
      </div>

      <h2>{name}</h2>

      <h4>{designation}</h4>

      <span className="department-badge">
        {department}
      </span>

      <p>
        📧{" "}
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
          target="_blank"
          rel="noreferrer"
          className="email-link"
        >
          {email}
        </a>
      </p>
    </div>
  );
}

export default EmployeeCard;