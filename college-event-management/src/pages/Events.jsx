import { useState } from "react";
import EventCard from "../components/EventCard";

import iste1 from "../assets/iste1.jpeg";
import iste2 from "../assets/iste2.jpeg";
import iste3 from "../assets/iste3.jpeg";

function Events() {
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !department || !year) {
      alert("Please fill all fields!");
      return;
    }

    const registration = {
  event: selectedEvent,
  name,
  email,
  department,
  year,
};
const oldData =
  JSON.parse(localStorage.getItem("registrations")) || [];

localStorage.setItem(
  "registrations",
  JSON.stringify([...oldData, registration])
);

alert(`Successfully Registered!\n\nName: ${name}`);

    setShowForm(false);

    setName("");
    setEmail("");
    setDepartment("");
    setYear("");
  };

  return (
    <div className="events-section">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        All Events
      </h1>

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

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Register for Event</h2>

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
    </div>
  );
}

export default Events;