import { useEffect, useState } from "react";

function MyEvents() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("registrations")) || [];

    setRegistrations(data);
  }, []);
  const deleteRegistration = (indexToDelete) => {
  const updatedRegistrations = registrations.filter(
    (_, index) => index !== indexToDelete
  );

  setRegistrations(updatedRegistrations);

  localStorage.setItem(
    "registrations",
    JSON.stringify(updatedRegistrations)
  );
};

  return (
    <div className="events-section">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        My Events
      </h1>

      {registrations.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No registrations yet.
        </p>
      ) : (
        <div className="registration-grid">
          {registrations.map((reg, index) => (
            <div
  key={index}
  className="registration-card"
>
  <h3>{reg.event}</h3>

  <p>👤 {reg.name}</p>

  <p>📧 {reg.email}</p>

  <p>🏫 {reg.department}</p>

  <p>🎓 {reg.year}</p>

  <button
    onClick={() => deleteRegistration(index)}
  >
    Delete Registration
  </button>
</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyEvents;