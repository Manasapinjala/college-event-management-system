import { useState } from "react";
import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";

import iste1 from "./assets/iste1.jpeg";
import iste2 from "./assets/iste2.jpeg";
import iste3 from "./assets/iste3.jpeg";


function App() {
  const [registrations, setRegistrations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
 const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [department, setDepartment] = useState("");
const [year, setYear] = useState("");;

  const handleSubmit = () => {
  if (!name || !email || !department || !year) {
    alert("Please fill all fields!");
    return;
  }

  const newRegistration = {
    name,
    email,
    department,
    year,
    event: selectedEvent,
  };

  setRegistrations([...registrations, newRegistration]);

  alert(
    `Successfully Registered!\n\nName: ${name}\nEvent: ${selectedEvent}`
  );

  setShowForm(false);

  setName("");
  setEmail("");
  setDepartment("");
  setYear("");
};
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>College Event Management System</h1>
        <p>
          Explore, register, and participate in exciting campus events.
        </p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search Events..."
          className="search-bar"
        />
      </div>

      <div className="events-section">
        <h2>Upcoming Events</h2>
      <div className="registrations-section">
  <h2>My Registrations</h2>

  {registrations.length === 0 ? (
    <p>No registrations yet.</p>
  ) : (
    <div className="registration-grid">
      {registrations.map((reg, index) => (
        <div key={index} className="registration-card">
          <h3>{reg.event}</h3>
          <p>👤 {reg.name}</p>
          <p>🏫 {reg.department}</p>
          <p>📧 {reg.email}</p>
          <p>🎓 {reg.year}</p>
        </div>
      ))}
    </div>
  )}
</div>

        <div className="event-grid">
  <EventCard
    image={iste1}
    title="Hackathon 2026"
    date="25 June 2026"
    venue="Seminar Hall"
    onRegister={() => {
      setSelectedEvent("Hackathon 2026");
      setShowForm(true);
    }}
  />

  <EventCard
    image={iste2}
    title="Brain Builders"
    date="28 June 2026"
    venue="Block A"
    onRegister={() => {
      setSelectedEvent("Brain Builders");
      setShowForm(true);
    }}
  />

  <EventCard
    image={iste3}
    title="Ride The Rhythm"
    date="30 June 2026"
    venue="Auditorium"
    onRegister={() => {
      setSelectedEvent("Ride The Rhythm");
      setShowForm(true);
    }}
  />
</div>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Register for {selectedEvent}</h2>

            <input
  type="text"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="text"
  placeholder="Department"
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
/>

<input
  type="text"
  placeholder="Year"
  value={year}
  onChange={(e) => setYear(e.target.value)}
/>
            <button onClick={handleSubmit}>
  Submit
</button>

            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;